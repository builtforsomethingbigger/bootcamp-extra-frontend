import React from 'react'
import Comment from './Comment'
import YouTube from './YouTube';

const POST_URL = 'http://localhost:3000/api/v1/posts'
const USER_URL = 'http://localhost:3000/api/v1/users'
const COMMENT_URL = 'http://localhost:3000/api/v1/comments'


class PostShowPage extends React.Component {
    state = {
        post: {},
        authors: [],
        comments: [],
        video: false,
        display: false,
        queryString: '',
        text: ''
    }

    postId = this.props.match.params.id

    componentDidMount() {
        this.fetchComments()
        fetch(`${POST_URL}/${this.postId}`)
            .then(res => res.json())
            .then(post => this.setState({ post }))
        fetch(USER_URL)
            .then(res => res.json())
            .then(authors => this.setState({ authors }))
    }

    fetchComments = () => {
        fetch(COMMENT_URL)
            .then(res => res.json())
            .then(comments => this.setState({ comments }))
    }


    renderButton = () => {
        const { id, likes } = this.state.post

        return (
            <div className="ui labeled button">
                <div onClick={() => this.incrementLikes(id)} className="ui button">
                    <i className="heart icon blue"></i> Like
                </div>
                <button className="ui basic label">
                    {likes}
                </button>
            </div>
        )
    }


    incrementLikes = (id) => {
        fetch(`${POST_URL}/${id}`, {
            method: 'PATCH',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ likes: this.state.post.likes + 1 })
        })
            .then(res => res.json())
            .then(newPost => {
                this.setState({
                    post: newPost
                })
            })
    }

    showYouTube = e => {
        const displayState = this.state.display
        if (this.state.post.video === true && displayState === false){
            e.preventDefault()
          this.setState({
            display: true
          })
          const ytLink = this.state.post.url_link
          const stringArray = ytLink.split('=')
          this.setState({
              queryString: stringArray[1]
          })
        }else{
            this.setState({
                display: false
              })
        }
    }

    addNewComment = (newComment) => {
        this.setState({
            comments: [...this.state.comments, newComment],
        })
    }

    onSubmit = e => {
        e.preventDefault()
        fetch(COMMENT_URL, {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                post_id: this.state.post.id,
                user_id: this.props.currentUser.id,
                text: this.state.text
            })
        })
            .then(res => res.json())
            // .then(console.log)
            .then(newComment => {
                this.addNewComment(newComment)
                this.setState({
                    text: ''
                })
            })
    }

    changeInText = e => {
        this.setState({
            [e.target.name]: e.target.value

        })
    }

    // iframeConvert = () => {
    // }

    render() {
        console.log(this.state.queryString)
        const { title, description, url_link } = this.state.post
        const { id } = this.props.currentUser
        console.log(this.state.post.id, this.props.currentUser.id)
        return (
            <div className="ui text container full">
                <YouTube display={this.state.display} link={this.state.queryString} onClick={this.showYouTube}/>
                <div className="">
                    <div className="pad_20">
                        <h1 className="font_blue">{title}</h1>
                    </div>
                    <div className="">
                        <h3 className="ui dividing header">Description</h3>
                        <p>{description}</p>
                        <h3 className="ui dividing header">Resource Link</h3>
                        <a href={url_link} target="_blank" onClick={this.showYouTube}>{url_link}</a><br />
                        <br />
                        {this.renderButton()}
                    </div>
                    <div className="padding_top_50 margin_left_25"><Comment post={this.state.post} comments={this.state.comments} authors={this.props.authors} fetchComments={this.fetchComments} /></div>

                    <form onSubmit={this.onSubmit} className="ui reply form">
                        <div className="field">
                            <textarea name="text" value={this.state.text} onChange={this.changeInText}></textarea>
                        </div>
                        <button className="ui labeled submit icon button" type="submit">
                            <i className="icon edit blue" type="submit"></i> Add Reply
                        </button>
                    </form>
                </div>
            </div>
        )
    }
}

export default PostShowPage



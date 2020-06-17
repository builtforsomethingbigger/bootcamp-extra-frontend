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
        queryString: ''
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
        const {id, likes} = this.state.post

        return (
            <div className="ui labeled button">
                <div onClick={() => this.incrementLikes(id)} className="ui button">
                    <i  className="heart icon blue"></i> Like
                </div>
                <button  className="ui basic label">
                    {likes}
                </button>
            </div>
        )
    }

    incrementLikes = (id) => {
        fetch(`${POST_URL}/${id}`, {
            method: 'PATCH',
            headers:{
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({likes: this.state.post.likes + 1})
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
        }
      }

    // iframeConvert = () => {
    // }

    render() {
        console.log(this.state.queryString)
        const { title, description, url_link } = this.state.post
        return (
            <div className="ui text container full">
                <YouTube display={this.state.display} link={this.state.queryString}/>
                <div className="">
                    <div className="pad_20">
                        <h1 className="font_blue">{title}</h1>
                    </div>
                    <div className="">
                        <h3 className="ui dividing header">Description</h3>
                        <p>{description}</p>
                        <h3 className="ui dividing header">Resource Link</h3>
                        <a href={url_link} target="_blank" onClick={this.showYouTube}>{url_link}</a><br/>
                        <br/>
                        {this.renderButton()}
                    </div>
                    <div className="padding_top_50 margin_left_25"><Comment post={this.state.post} comments={this.state.comments} authors={this.props.authors} fetchComments={this.fetchComments} /></div>
                </div>
            </div>
        )
    }
}

export default PostShowPage
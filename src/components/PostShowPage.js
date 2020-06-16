import React from 'react'
import Comment from './Comment'
import YouTube from './YouTube';

const POST_URL = 'http://localhost:3000/api/v1/posts'


class PostShowPage extends React.Component {
    state = {
        post: {},
        video: false,
        display: false
    }

    postId = this.props.match.params.id

    componentDidMount() {
        fetch(`${POST_URL}/${this.postId}`)
            .then(res => res.json())
            .then(post => this.setState({ post }))
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
        // .then(console.log)
        .then(newPost => {
            this.setState({
                post: newPost
            })
        })
    }

    showYouTube = e => {
        const displayState = this.state.display
        if (displayState === true){
          this.setState({
            display: false
          })
        }else{
          this.setState({
            display: true
          })
        }
      }

    render() {
        console.log(this.state.post)
        const { title, description, url_link } = this.state.post
        return (
            <div className="ui text container full">
                <YouTube display={this.state.display}/>
                <div className="">
                    <div className="pad_20">
                        <h1>{title}</h1>
                    </div>
                    <div className="">
                        <h3 className="font_blue">Description</h3>
                        <p>{description}</p>
                        <h3 className="font_blue">Resource Link</h3>
                        <a href={url_link} target="_blank" onClick={this.showYouTube}>{url_link}</a><br/>
                        <br/>
                        {this.renderButton()}
                    </div>
                    <div className="padding_top_50 margin_left_25"><Comment posts={this.state.post} /></div>
                </div>
            </div>
        )
    }
}

export default PostShowPage
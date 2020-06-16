import React from 'react'
import Comment from './Comment'

const POST_URL = 'http://localhost:3000/api/v1/posts'


class PostShowPage extends React.Component {
    state = {
        post: {}
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

    render() {
        console.log(this.state.post)
        const { title, description } = this.state.post
        return (
            <div className="ui text container full">
                <div className="">
                    <div className="pad_20">
                        <h1>{title}</h1>
                    </div>
                    <div className="">
                        <h3 className="font_blue">Description</h3>
                        <p>{description}</p>
                        {this.renderButton()}
                    </div>
                    <div className="padding_top_50 margin_left_25"><Comment posts={this.state.post} /></div>
                </div>
            </div>
        )
    }
}

export default PostShowPage
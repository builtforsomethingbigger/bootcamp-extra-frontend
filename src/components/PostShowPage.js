import React from 'react'
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
                    <i  className="heart icon"></i> Like
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
            <div className="ui one column grid">
                <div className="row">
                    <div className="column">
                        <h1>{title}</h1>
                    </div>
                </div>
                <div className="row">
                    <div className="column">
                        <p>{description}</p>
                        {this.renderButton()}
                    </div>
                </div>
            </div>
        )
    }
}

export default PostShowPage
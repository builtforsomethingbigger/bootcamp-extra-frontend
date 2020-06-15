import React from 'react'

const POST_URL = 'http://localhost:3000/api/v1/posts'

class PostForm extends React.Component {
    state = {
        title: '',
        url_link: '',
        description: '',
        likes: 0
    }

    handleInputChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    clickSubmit = (e) => {
        e.preventDefault()
        fetch(POST_URL, {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            }, 
            body: JSON.stringify(
                this.state
            )
        })
        .then(res => res.json())
        .then(newPost => {
            this.props.addNewPost(newPost)
            this.setState({
                title: '',
                url_link: '',
                description: '',
            })
        })

    }


    render() {
        console.log(this.state)
        const { clickSubmit, handleInputChange} = this

        return (
            <form onSubmit={clickSubmit} className="ui form">
                <div className="field">
                    <label> Title of Post </label>
                    <input type="text" onChange={handleInputChange} name="title" value={this.state.title} placeholder="Title here..." />
                </div>
                <div className="field">
                    <label> Url </label>
                    <input type="text" onChange={handleInputChange} name="url_link" value={this.state.url_link} placeholder="Paste URL..." />
                </div>
                <div className="ui form">
                    <div className="field">
                        <label> Description </label>
                        <textarea onChange={handleInputChange} name='description' value={this.state.description} placeholder="Enter text here..."></textarea>
                    </div>
                </div>
                    <button className="ui button" type="submit">Submit</button>
            </form>
        )
    }
}

export default PostForm

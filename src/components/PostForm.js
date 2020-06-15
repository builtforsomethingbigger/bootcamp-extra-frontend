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

    onSubmit = (e) => {
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
        const { onSubmit, handleInputChange} = this

        return (
            <form onSubmit={onSubmit} class="ui form">
                <div class="field">
                    <label> Title of Post </label>
                    <input type="text" onChange={handleInputChange} name="title" value={this.state.title} placeholder="Title here..." />
                </div>
                <div class="field">
                    <label> Url </label>
                    <input type="text" onChange={handleInputChange} name="url_link" value={this.state.url_link} placeholder="Paste URL..." />
                </div>
                <div class="ui form">
                    <div class="field">
                        <label> Description </label>
                        <textarea onChange={handleInputChange} name='description' value={this.state.description} placeholder="Enter text here..."></textarea>
                    </div>
                </div>
                    <button class="ui button" type="submit">Submit</button>
            </form>
        )
    }
}

export default PostForm

// t.string "title"
// t.string "description"
// t.integer "likes"
// t.string "url_link"
// t.datetime "created_at", precision: 6, null: false
// t.datetime "updated_at", precision: 6, null: false
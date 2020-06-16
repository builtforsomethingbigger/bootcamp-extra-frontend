
import React from 'react'
const POST_URL = 'http://localhost:3000/api/v1/posts'


class UserForm extends React.Component {
    state = {
        fullName: '',
        bio: '',
        password: '',
        username: '',
        mod: 0
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
            this.setState({
                title: '',
                url_link: '',
                description: '',
            })
        })
        this.pushUserToPostsIndex()

    }
    
    pushUserToPostsIndex = () => {
        const history  = this.props.history
        history.push('/posts')
    }


    render() {
        const { clickSubmit, handleInputChange} = this

        return(
            <form onSubmit={clickSubmit} className="ui form">
            <div className="field">
                <label> Full Name </label>
                <input type="text" onChange={handleInputChange} name="fullName" value={this.state.fullName} placeholder="First & Last Name" />
            </div>
            <div className="field">
                <label> Username </label>
                <input type="text" onChange={handleInputChange} name="username" value={this.state.username} placeholder="Title here..." />
            </div>
            <div className="field">
                <label> Password </label>
                <input type="text" onChange={handleInputChange} name="password" value={this.state.password} placeholder="Title here..." />
            </div>
                <button className="ui button" 
                type="submit">Submit</button>
        </form>
        )
    }
}

export default UserForm

// t.string "name"
// t.string "bio"
// t.string "password"
// t.string "username"
// t.integer "mod"
// t.datetime "created_at", precision: 6, null: false
// t.datetime "updated_at"
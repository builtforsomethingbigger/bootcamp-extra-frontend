
import React from 'react'
const USER_URL = 'http://localhost:3000/api/v1/users'


class UserForm extends React.Component {
    state = {
        name: '',
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
        fetch(USER_URL, {
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
            .then(newUser => {
                this.props.addNewUser(newUser)
                this.setState({
                    name: '',
                    bio: '',
                    password: '',
                    username: ''
                })
            })
        this.pushUserToUsersIndex()

    }

    pushUserToUsersIndex = () => {
        const history = this.props.history
        history.push('/users')
    }


    render() {
        const { clickSubmit, handleInputChange } = this
        console.log(this.props)

        return (
            <form onSubmit={clickSubmit} className="ui form">
                <div className="field">
                    <label> Full Name </label>
                    <input type="text" onChange={handleInputChange} name="name" value={this.state.name} placeholder="First & Last Name" />
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
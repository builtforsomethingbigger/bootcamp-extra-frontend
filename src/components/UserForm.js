
import React from 'react'
const USER_URL = 'http://localhost:3000/api/v1/users'


class UserForm extends React.Component {
    state = {
        name: '',
        bio: '',
        password: '',
        username: '',
        mod: ''

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
        console.log(this.state)

        return (
            <form onSubmit={clickSubmit} id="userFormContainer" className="ui form container">
                <div className="field pad_10">
                    <h2> Full Name </h2>
                    <input type="text" onChange={handleInputChange} name="name" value={this.state.name} placeholder="First & Last Name" />
                </div>
                <div className="field pad_10">
                    <h2> Username </h2>
                    <input type="text" onChange={handleInputChange} name="username" value={this.state.username} placeholder="Title here..." />
                </div>
                <div className="field pad_10">
                    <h2> Password </h2>
                    <input type="text" onChange={handleInputChange} name="password" value={this.state.password} placeholder="Title here..." />
                </div>
                <div className=" pad_10">
                    <select className="ui dropdown" onChange={handleInputChange} name='mod'>
                        <option hidden value={0}> Module</option>
                        <option value={1}>Mod 1</option>
                        <option value={2}>Mod 2</option>
                        <option value={3}>Mod 3</option>
                        <option value={4}>Mod 4</option>
                        <option value={5}>Mod 5</option>
                    </select>
                <br />

                <button className="userFormSubmit" type="submit">Submit</button>
                </div>
            </form >
        )
    }
}

export default UserForm

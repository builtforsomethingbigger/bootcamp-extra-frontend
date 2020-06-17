import React from 'react'

const POST_URL = 'http://localhost:3000/api/v1/posts'

class PostForm extends React.Component {
    state = {
        title: '',
        url_link: '',
        video: null,
        description: '',
        likes: 0
    }

    handleInputChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSelectionChange = e => {
        if(e.target.value === "true"){
            this.setState({
                video: true
            })
        }else{
            this.setState({
                video: false
            })
        }
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
                video: '',
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
        const { clickSubmit, handleInputChange, handleSelectionChange} = this

        return (
            <form onSubmit={clickSubmit} className="ui form container">
                <div className="field">
                    <label> Title of Post </label>
                    <input type="text" onChange={handleInputChange} name="title" value={this.state.title} placeholder="Title here..." />
                </div>
                <div className="field">
                    <label>Resource Link</label>
                    <table width="100%" border="0" cellPadding="0" cellSpacing="0">
                        <tr>
                            <td width="15%">
                                <select className="ui dropdown" onChange={handleSelectionChange} name='video'>
                                    <option hidden value="null">Media Type</option>
                                    <option value="false">Link</option>
                                    <option value="true">Video</option>
                                </select>
                            </td>
                            <td width="85%">
                                <input type="text" onChange={handleInputChange} name="url_link" value={this.state.url_link} placeholder="Paste URL..." />
                            </td>
                        </tr>
                    </table>
                </div>
                <div className="ui form">
                    <div className="field">
                        <label> Description </label>
                        <textarea onChange={handleInputChange} name='description' value={this.state.description} placeholder="Enter text here..."></textarea>
                    </div>
                </div>
                    <button className="ui button" 
                    type="submit">Submit</button>
            </form>
        )
    }
}

export default PostForm

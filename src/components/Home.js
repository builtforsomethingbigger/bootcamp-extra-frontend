import React from 'react';
import Nav from './Nav';
import PostsPage from './PostsPage';
import { Route, Switch } from 'react-router-dom';

const POST_URL = 'http://localhost:3000/api/v1/posts'

export default class Home extends React.Component {
  state = {
    posts: [], 
    showForm: false
  }

  componentDidMount() {
    fetch(POST_URL).then(res => res.json())
      .then(posts => {
        this.setState({
          posts
        })
      })

  }

  render() {
    // console.log(this.state)
    return (
      <div>
        <div className="App">
          <Nav />
          <div className='post-container'>
            <h1>List of Articles</h1>
            <button>Create a Post </button>
            <PostsPage posts={this.state.posts} />
          </div>
        </div>
      </div>
    );
  }
}

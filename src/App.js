import React from 'react';
import logo from './logo.svg';
import './App.css';

import { Nav } from './components';
import PostsPage from './components/PostsPage';

const POST_URL = 'http://localhost:3000/api/v1/posts'


class App extends React.Component {
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

export default App;

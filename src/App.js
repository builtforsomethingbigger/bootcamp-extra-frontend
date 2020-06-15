import React from 'react';
import logo from './logo.svg';
import './App.css';

import { Nav } from './components';
import PostsPage from './components/PostsPage';
import PostForm from './components/PostForm';

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

  addNewPost = (newPost) => {
    this.setState({
      posts: [...this.state.posts, newPost]
    })
  }

  handleClick = () => {
    let newBoolean = !this.state.showForm
    this.setState({
      showForm: newBoolean
    })
  }

  render() {
    // console.log(this.state)
    return (
      <div>
        <div className="App">
          <Nav />
          {
            this.state.showForm ? <PostForm addNewPost={this.addNewPost} handleSubmit={this.handleSubmit} /> : null
          }
          <div>
            <button onClick={this.handleClick}> Create a Post </button>
          </div>
          <div className='post-container'>
            <h1>List of Articles</h1>
            <PostsPage posts={this.state.posts} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;

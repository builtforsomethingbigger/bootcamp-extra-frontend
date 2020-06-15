import React from 'react';
import Nav from './Nav';
import HomePosts from './HomePosts';
import { Route, Switch } from 'react-router-dom';

const POST_URL = 'http://localhost:3000/api/v1/posts'

export default class Home extends React.Component {
  state = {
    posts: [], 
    showForm: false,
    searchInput: ''
  }

  componentDidMount() {
    fetch(POST_URL).then(res => res.json())
      .then(posts => {
        this.setState({
          posts
        })
      })
  }

  searchPosts = e => {
    this.setState({
      [e.target.name]: e.target.value
    })
    this.displaySearchedPosts()
  }

  displaySearchedPosts = e => {
    const allPosts = [...this.state.posts]
    const input = this.state.searchInput
    return allPosts.filter(posts => posts.title.toLowerCase().includes(input.toLowerCase()) 
    || posts.description.toLowerCase().includes(input.toLowerCase()))
    // || posts.author.toLowerCase().includes(input.toLowerCase()))
  }

  render() {
    // console.log(this.state)
    return (
      <div>
        <div className="App">
          <Nav value={this.state.searchInput} onChange={this.searchPosts}/>
          <div className='post-container'>
            <h1>List of Articles</h1>
            <button>Create a Post </button>
            <HomePosts posts={this.displaySearchedPosts()}  />
          </div>
        </div>
      </div>
    );
  }
}

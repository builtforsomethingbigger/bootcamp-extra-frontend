import React from 'react';
// import logo from './logo.svg';
import './App.css';
import { Home, PostsPage } from './components';

import { Route, Switch } from 'react-router-dom';
import Nav from './components/Nav'

const POST_URL = 'http://localhost:3000/api/v1/posts'

class App extends React.Component {
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

  addNewPost = (newPost) => {
    this.setState({
      posts: [...this.state.posts, newPost],
      showForm: !this.state.showForm
    })
  }

  handleClick = () => {
    let newBoolean = !this.state.showForm
    this.setState({
      showForm: newBoolean
    })
  }

  displayRecentPosts = e => {
    const allPosts = [...this.state.posts]
    const input = this.state.searchInput
    return allPosts.sort((a, b) => b.date - a.date)
  }

  render() {
    console.log(this.state)
    return (
      <div className="App">
        <Nav value={this.state.searchInput} onChange={this.searchPosts} />
        <Switch> {/** with switch, order from most to least specific and will only render ONE */}
          <Route path='/posts' render={() => <PostsPage posts={this.state.posts}/>} />
          <Route path="/" render={() => <Home displayRecentPosts={this.displayRecentPosts()} displaySearchedPosts={this.displaySearchedPosts()} />} />
        </Switch>
        {/* <Home displayRecentPosts={this.displayRecentPosts()} displaySearchedPosts={this.displaySearchedPosts()} /> */}
      </div>
    )
  }
}

export default App;



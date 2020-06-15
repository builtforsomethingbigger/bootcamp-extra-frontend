import React from 'react';
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
    return allPosts.sort((a, b) => b.date - a.date)
  }

  render() {
    return (
      <div className="App">
        <Nav value={this.state.searchInput} onChange={this.searchPosts} />
        <Switch>
          <Route path='/posts' render={() => <PostsPage posts={this.state.posts}/>} />
          <Route path="/" render={() => <Home displayRecentPosts={this.displayRecentPosts()} displaySearchedPosts={this.displaySearchedPosts()} />} />
        </Switch>
      </div>
    )
  }
}

export default App;



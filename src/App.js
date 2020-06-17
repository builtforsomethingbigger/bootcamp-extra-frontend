import React from 'react';
import './App.css';
import { Home, PostsPage, PostForm, UsersPage } from './components';
import { Route, Switch } from 'react-router-dom';
import Nav from './components/Nav'
import PostShowPage from './components/PostShowPage';
import UserForm from './components/UserForm';


const POST_URL = 'http://localhost:3000/api/v1/posts'
const USER_URL = 'http://localhost:3000/api/v1/users'

class App extends React.Component {
  state = {
    currentUser: {
      bio: "",
      created_at: "2020-06-17T20:07:00.142Z",
      id: 29,
      mod: 3,
      name: "Edgar Rivera",
      password: "123",
      updated_at: "2020-06-17T20:07:00.142Z",
      username: "TestUser"
    },
    posts: [],
    authors: [],
    searchInput: ''
  }


  componentDidMount() {
    fetch(POST_URL).then(res => res.json())
      .then(posts => {
        this.setState({
          posts
        })
      })
    fetch(USER_URL).then(res => res.json())
      .then(authors => {
        this.setState({
          authors
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
    })
  }

  addNewUser = (newUser) => {
    this.setState({
      authors: [...this.state.authors, newUser],
      currentUser: newUser
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
        <Nav value={this.state.searchInput} onChange={this.searchPosts} currentUser={this.state.currentUser} />
        <Switch>
          <Route path='/new_post' render={(routerProps) => <PostForm addNewPost={this.addNewPost} {...routerProps} />} />
          <Route path='/posts/:id' render={(routerProps) => <PostShowPage currentUser={this.state.currentUser} authors={this.state.authors} {...routerProps} />} />
          <Route path='/posts' render={() => <PostsPage displayRecentPosts={this.displayRecentPosts()}
            displaySearchedPosts={this.displaySearchedPosts()} authors={this.state.authors} />} />

          <Route path='/signup' render={(routerProps) => <UserForm addNewUser={this.addNewUser} {...routerProps} />} />
          <Route path='/users/:id' component={PostShowPage} />
          <Route path='/users' render={() => <UsersPage authors={this.state.authors} posts={this.state.posts} />} />
          <Route path="/" render={() => <Home displayRecentPosts={this.displayRecentPosts()} displaySearchedPosts={this.displaySearchedPosts()} authors={this.state.authors} />} />
        </Switch>
      </div>
    )
  }
}

export default App;



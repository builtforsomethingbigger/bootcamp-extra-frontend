import React from 'react';
import Nav from './Nav';
import HomePosts from './HomePosts';
import PostForm from './PostForm';
// import { Route, Switch } from 'react-router-dom';
import RecentPosts from './RecentPosts';
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
    return allPosts.sort((a,b) => b.date - a.date)
  }

  render() {
    // console.log(this.state)
    return (
      <div className="App">
        <div className="full">
          <Nav value={this.state.searchInput} onChange={this.searchPosts}/>
          <table className="full" border="0" cellSpacing="0" cellPadding="0">
            <tr>
              <td valign='top'>
                <HomePosts posts={this.displaySearchedPosts()} />
              </td>
              <td valign='top'>
                <table  border="0" cellSpacing="0" cellPadding="0">
                  <tr>
                    <td id="recentPosts" valign="top">
                      <RecentPosts  posts={this.displayRecentPosts()} />
                    </td>
                  </tr>
                  <tr>
                    <td></td>
                  </tr>
                </table>
              </td>
            </tr>
          </table>
        </div>
      </div>
    );
  }
}




// import PostsPage from './components/PostsPage';


// class App extends React.Component {
 

  
//   render() {
//     // console.log(this.state)
//     return (
//       <div>
//         <div className="App">
//           <Nav />
//           {
//             this.state.showForm ? <PostForm addNewPost={this.addNewPost} handleSubmit={this.handleSubmit} /> : null
//           }
//           <div>
//             <button onClick={this.handleClick}> Create a Post </button>
//           </div>
//           <div className='post-container'>
//             <h1>List of Articles</h1>
//             <PostsPage posts={this.state.posts} />
//           </div>
//         </div>
//       </div>
//     );
//   }
// }
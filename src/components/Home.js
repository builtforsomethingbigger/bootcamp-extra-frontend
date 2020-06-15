import React from 'react';
import Nav from './Nav';
import HomePosts from './HomePosts';
import PostForm from './PostForm';
// import { Route, Switch } from 'react-router-dom';
import RecentPosts from './RecentPosts';
import { Route, Switch } from 'react-router-dom';


export default class Home extends React.Component {


  render() {
    console.log(this.props)
    return (
      <div className="App">
        <div className="full">
          
          <table className="full" border="0" cellSpacing="0" cellPadding="0">
            <tr>
              <td valign='top'>
                <HomePosts posts={this.props.displaySearchedPosts} />
              </td>
              <td valign='top'>
                <table border="0" cellSpacing="0" cellPadding="0">
                  <tr>
                    <td id="recentPosts" valign="top">
                      <RecentPosts posts={this.props.displayRecentPosts} />
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

// import React from 'react';
// import './App.css';
// import { Auth, Help, Home, Nav, PetIndex, PetProfile } from './components';
// import { Route, Switch } from 'react-router-dom';
// class App extends React.Component {
//   render() {
//     return (
//       <div className="App">
//         <Nav /> {/** nav stays outside of our switch and routes b/c we want it visible all of the time  */}
//         <Switch> {/** with switch, order from most to least specific and will only render ONE */}
//           <Route path="/login" render={(routerProps) => <Auth {...routerProps} />} />
//           <Route path="/help" render={() => <Help exampleCustomProp={false} />} />
//           {/** use render prop to route if you need custom props in your component */}
//           <Route path="/pets/:id" component={PetProfile} />
//           <Route path="/pets" component={PetIndex} />
//           <Route exact path="/" component={Home} /> {/** will match if the user is a / or /anythingElse */}
//         </Switch>
//         {/* <Auth /> */}
//         {/* <Help />
//         <Home />
//         <PetProfile />
//         <PetIndex /> */}
//       </div>
//     );
//   }
// }
// export default App;
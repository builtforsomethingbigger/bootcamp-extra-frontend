import React from 'react';
import HomePosts from './HomePosts';
import RecentPosts from './RecentPosts';


export default class Home extends React.Component {


  render() {
    return (
      <div className="App">
        <div className="full">
          
          <table className="full" border="0" cellSpacing="0" cellPadding="0">
            <tbody>  
              <tr>
                <td valign='top'>
                  <HomePosts posts={this.props.displaySearchedPosts} />
                </td>
                <td valign='top'>
                  <table border="0" cellSpacing="0" cellPadding="0">
                    <tbody>
                      <tr>
                        <td id="recentPosts" valign="top">
                          <RecentPosts posts={this.props.displayRecentPosts} />
                        </td>
                      </tr>
                      <tr>
                        <td></td>
                      </tr>
                    </tbody>
                  </table>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

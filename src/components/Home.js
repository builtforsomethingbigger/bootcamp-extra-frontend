import React from 'react';
import HomePosts from './HomePosts';
import RecentPosts from './RecentPosts';


export default class Home extends React.Component {


  render() {
    return (
      <div className="App pad_10">
        <div className="full">
          
          
          <table className="full" border="0" cellSpacing="0" cellPadding="0">
            <tbody>  
              <tr>
                <td valign='top'>
                  <HomePosts posts={this.props.displaySearchedPosts} />
                  {/* <div className="font_blue font_20">Loading More Posts...</div> */}
                </td>
                <td valign='top'>
                  <table border="0" cellSpacing="0" cellPadding="0">
                    <tbody>
                      <tr>
                        <td id="recentPosts" className="radius_round" valign="top">
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

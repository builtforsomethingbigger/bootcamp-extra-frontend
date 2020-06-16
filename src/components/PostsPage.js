import React from 'react';
import Postcard from './Postcard'
import RecentPosts from './RecentPosts';




class PostsPage extends React.Component {

  
  render(){
    console.log(this.props)
    return (
      <div className="PostsPage margin_left_20 " >
        <div className='formDiv'> 

        </div>
        <table className="full" border="0" cellSpacing="0" cellPadding="0">
            <tbody>  
              <tr>
                <td valign='top'>
                {this.props.displaySearchedPosts.map(post => <Postcard key={post.id} {...post}  />  )}
                  {/* <div className="font_blue font_20">Loading More Posts...</div> */}
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
    );
  }
}


export default PostsPage;

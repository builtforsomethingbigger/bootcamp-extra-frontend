import React from 'react';
import { Link} from 'react-router-dom';

// import { Route, Switch } from 'react-router-dom';

export default class User extends React.Component {
  state = {
    display: false
  }

  clickHandler = e => {
    if(this.state.display === false){
      this.setState({
        display: true
      })
    }else{
      this.setState({
        display: false
      })
    }
  }

  render(){

    const userPosts = this.props.posts.filter(posts => posts.user_id === this.props.id)
    return (
      <div className="ui raised very padded text container segment">
          <div className="ui item">
              <div>
                  <h1 className="ui dividing header blue" onClick={this.clickHandler}>{this.props.username.toUpperCase()}</h1>
              </div>
              <div className="ui container">
                <table width="100%" cellSpacing="0" cellPadding="0" border="0">
                  <tbody>
                    <tr>
                      <td align="left">
                        <table align="left" width="100%" cellSpacing="0" cellPadding="10" border="0">
                          <tbody>
                            <tr>
                              <td width="80px" align="left" valign="top"><b>NAME:</b>&nbsp;&nbsp;&nbsp;</td>
                              <td align="left" valign="top">{this.props.name}</td>
                            </tr>
                          </tbody>
                        </table>
                      </td>
                      <td align="left">
                        <table align="left" width="100%" cellSpacing="0" cellPadding="10" border="0">
                          <tbody>
                            <tr>
                              <td width="80px" align="left" valign="top"><b>MOD:</b>&nbsp;&nbsp;&nbsp;</td>
                              <td align="left" valign="top">{this.props.mod}</td>
                            </tr>
                          </tbody>
                        </table>
                      </td>
                    </tr>
                    <tr>
                      <td colSpan="2">
                        <table align="left" width="100%" cellSpacing="0" cellPadding="10" border="0">
                          <tbody>
                            <tr>
                              <td width="80px" align="left" valign="top"><b>BIO:</b>&nbsp;&nbsp;&nbsp;</td>
                              <td align="left" valign="top">{this.props.bio}</td>
                            </tr>
                          </tbody>
                        </table>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
          </div>
          <div className="ui container" style={{display: this.state.display ? 'block' : 'none'}}>
              <table width="100%" cellSpacing="0" cellPadding="0" border="0">
                <tr>
                  <td className="padding_top_50"><h3 className="ui dividing">{this.props.username.toUpperCase()}'s POSTS:</h3></td>
                </tr>
                {userPosts.map(post =>  
                <tr>
                  <td>
                    <table align="left" width="100%" cellSpacing="0" cellPadding="10" border="0">
                      <tbody>
                        <tr>
                          <td align="left" valign="top"><Link to={`/posts/${post.id}`}>{post.title.toUpperCase()}</Link></td>
                        </tr>
                      </tbody>
                    </table>
                  </td>
                </tr>
                )}
              </table>
          </div>
      </div>
    );
  }
}
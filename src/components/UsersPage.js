import React from 'react';
import User from './User';

class UsersPage extends React.Component {

  
  render(){
    console.log(this.props)
    return (
      <div>
        <table className="full" border="0" cellSpacing="0" cellPadding="0">
            <tbody>  
              <tr>
                <td valign='top'>
                {this.props.authors.map(author => <User key={author.id} {...author}  />  )}
                  {/* <div className="font_blue font_20">Loading More Users...</div> */}
                </td>
              </tr>
            </tbody>
          </table>   
      </div>
    );
  }
}


export default UsersPage;

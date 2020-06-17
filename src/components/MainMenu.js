import React from 'react';
import { Link } from 'react-router-dom';

export default class MainMenu extends React.Component{


    render(){
        return(
            <div id="mainMenu" className="ui fluid alignRight" onMouseLeave={this.props.mouseOut} style={{display: this.props.mainMenu ? 'block' : 'none' }}>
                    <div>
                        <table width="100%">
                            <tbody>
                                <tr>
                                    <td className="pad_10">
                                        <div className="column">
                                            <div className="ui list">
                                                <Link to="/" className="item font_24 font_blue">Home 🏠</Link>
                                                <Link to="/posts" className="item font_24 font_blue">All Posts</Link>
                                                <Link to="/users" className="item font_24 font_blue">All Authors</Link>
                                                <Link to="/signup" className="item font_24 font_blue">Sign Up / Log In</Link>
                                            </div>
                                        </div>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                        
                    </div>
                </div>

        )
    }
}
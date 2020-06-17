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
                                                <Link to="/" className="item font_20 font_blue">Home</Link>
                                                <Link to="/posts" className="item font_20 font_blue">Posts</Link>
                                                <Link to="/users" className="item font_20 font_blue">Authors</Link>
                                                <Link to="/signup" className="item font_20 font_blue">Log In</Link>
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
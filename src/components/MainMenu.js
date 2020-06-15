import React from 'react';
import { Link } from 'react-router-dom';

export default class MainMenu extends React.Component{
    render(){
        return(
            <div id="mainMenu" className="ui fluid alignRight" style={{display: this.props.mainMenu ? 'block' : 'none' }}>
                    <div>
                        <table width="100%">
                            <tbody>
                                <tr>
                                    <td className="pad_10">
                                        <div className="column">
                                            <div className="ui Link list">
                                                <Link to="/" className="item font_20">Home</Link>
                                                <Link to="/posts" className="item font_20">Posts</Link>
                                                <Link to="/" className="item font_20">tag_name</Link>
                                                <Link to="/" className="item font_20">tag_name</Link>
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
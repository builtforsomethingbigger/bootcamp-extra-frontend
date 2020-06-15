import React from 'react';
import { Link } from 'react-router-dom';

export default class DropdownMenu extends React.Component{
    render(){
        return(
            <div id="dropdownMenu" className="ui fluid popup alignRight" style={{display: this.props.browseMenu ? 'block' : 'none' }}>
                    <div>
                        <table width="100%">
                            <tbody>
                                <tr>
                                    <td className="pad_10"></td>
                                </tr>
                                <tr>
                                    <td className="ui five column relaxed equal divided grid">
                                        <div className="column">
                                            <h4 className="ui header">Ruby</h4>
                                            <div className="ui Link list">
                                                <Link to="/" className="item">tag_name</Link>
                                                <Link to="/" className="item">tag_name</Link>
                                            </div>
                                        </div>
                                        <div className="column">
                                            <h4 className="ui header">Rails</h4>
                                            <div className="ui Link list">
                                                <Link to="/" className="item">tag_name</Link>
                                                <Link to="/" className="item">tag_name</Link>
                                            </div>
                                        </div>
                                        <div className="column">
                                            <h4 className="ui header">JavaScript</h4>
                                            <div className="ui Link list">
                                                <Link to="/" className="item">tag_name</Link>
                                                <Link to="/" className="item">tag_name</Link>
                                            </div>
                                        </div>
                                        <div className="column">
                                            <h4 className="ui header">React</h4>
                                            <div className="ui Link list">
                                                <Link to="/" className="item">tag_name</Link>
                                                <Link to="/" className="item">tag_name</Link>
                                            </div>
                                        </div>
                                        <div className="column">
                                            <h4 className="ui header">Other</h4>
                                            <div className="ui Link list">
                                                <Link to="/" className="item">tag_name</Link>
                                                <Link to="/" className="item">tag_name</Link>
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
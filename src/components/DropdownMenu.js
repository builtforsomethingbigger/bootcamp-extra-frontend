import React from 'react';
import { Link, NavLink } from 'react-router-dom';

export default class DropdownMenu extends React.Component{
    render(){
        return(
            <div id="dropdownMenu" className="ui fluid popup" style={{display: this.props.display ? 'block' : 'none' }}>
                <div className="ui four column relaxed equal height divided grid">
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
                        <h4 className="ui header">React</h4>
                        <div className="ui Link list">
                            <Link to="/" className="item">tag_name</Link>
                            <Link to="/" className="item">tag_name</Link>
                        </div>
                    </div>
                </div>
            </div>

        )
    }
}
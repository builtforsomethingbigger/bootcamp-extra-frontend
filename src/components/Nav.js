import React from 'react';
// import DropdownMenu from './DropdownMenu';
import Search from './Search';
import { Link} from 'react-router-dom';


export default class Nav extends React.Component{

    state={
        display: false
    }

    clickHandler = e => {
        if(this.state.display === true){
            this.setState({
                display: false
            })
        }else{
            this.setState({
                display: true
            })
        }
    }

    render(){
        return(
            <div id="navigation">
                <div className="ui menu grey">
                    <img src={'../images/bc_extra_logo.png'} alt='logo'/>
                    <Search value={this.props.value} onChange={this.props.onChange} />
                    <Link id="browseCta" onClick={this.clickHandler} className="browse item">
                        Browse
                        <i className="dropdown icon"></i>
                    </Link>
                </div>
                <div id="dropdownMenu" className="ui fluid popup alignRight" style={{display: this.state.display ? 'block' : 'none' }}>
                    <div className="ui five column relaxed equal height divided grid">
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
                    </div>
                </div>
            </div>
        );
    }
};
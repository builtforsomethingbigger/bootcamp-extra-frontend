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
            <div id="navigation full">
                <div className="ui menu">
                    <table className="full" border="0" cellPadding="0" cellSpacing="0">
                        <tbody>
                            <tr>
                                <td width="100px" className="browseBtn"><Link id="browseCta" onClick={this.clickHandler} className="browse item">
                                        Browse
                                        <i className="dropdown icon"></i>
                                    </Link>
                                </td>
                                <td className="searchBar">
                                    <Search value={this.props.value} onChange={this.props.onChange} />
                                </td>
                                <td align="left" width="50px">
                                    <img src={'../images/bc_extra_logo.png'} alt="Bootcamp Extra" />
                                </td>
                            </tr>
                        </tbody>
                    </table>
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
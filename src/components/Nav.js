import React from 'react';
import Search from './Search';
import DropdownMenu from './DropdownMenu';
import MainMenu from './MainMenu';
import { Link} from 'react-router-dom';


export default class Nav extends React.Component{

    

    state={
        mainMenu: false,
        browseMenu: false
    }

    browseHandler = e => {
        if(this.state.browseMenu === true){
            this.setState({
                browseMenu: false
            })
        }else{
            this.setState({
                browseMenu: true
            })
        }
    }
    mainHandler = e => {
        if(this.state.mainMenu === true){
            this.setState({
                mainMenu: false
            })
        }else{
            this.setState({
                mainMenu: true
            })
        }
    }

    focusOut = e => {
        this.setState({
            mainMenu: false
        })
    }

    render(){
        return(
            <div id="navigation">
                <div className="ui menu">
                    <table className="full pad_10" border="0" cellPadding="0" cellSpacing="0">
                        <tbody>
                            <tr>
                                <td align="left" width="70px">
                                    <Link to='/' className="headLogo stroke">BootcampExtra</Link>
                                </td>
                                <td className="searchBar">
                                    <Search value={this.props.value} onChange={this.props.onChange} />
                                </td>
                                <td width="100px">
                                    <div className="browseBtn" onClick={this.browseHandler} >
                                        <b className=" font_20">Topics</b>
                                        <i className="dropdown icon"></i>
                                    </div>
                                </td>
                                <td width="100px">
                                    <div id="menuBtn" onClick={this.mainHandler} >
                                        ☰
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <MainMenu mainMenu={this.state.mainMenu}  mouseOut={this.mainHandler} />
                <DropdownMenu browseMenu={this.state.browseMenu} mouseOut={this.browseHandler} />
            </div>
        );
    }
};
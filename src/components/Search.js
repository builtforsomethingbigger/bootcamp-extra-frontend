import React from 'react';
import { Route, Switch } from 'react-router-dom';

export default class Search extends React.Component {

  state = {
    input: ''
  }

  render(){
    return (
      <div className="ui category search container">
        <div className="ui icon input">
          <input className="prompt" type="text" placeholder="Search by title..." value={this.state.input} />
          <i className="search icon"></i>
        </div>
        <div className="results"></div>
      </div>
    );  
  }
}

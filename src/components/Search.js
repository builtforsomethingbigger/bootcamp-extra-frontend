import React from 'react';
import { Route, Switch } from 'react-router-dom';

function Search() {
  return (
    <div className="ui category search container">
      <div className="ui icon input">
        <input className="prompt" type="text" placeholder="Search by title..." />
        <i className="search icon"></i>
      </div>
      <div className="results"></div>
    </div>
  );
}
export default Search;

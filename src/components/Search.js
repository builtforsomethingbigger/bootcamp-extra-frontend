import React from 'react';
import { Route, Switch } from 'react-router-dom';

function Search() {
  return (
    <div className="ui category search">
      <div className="ui icon input">
        <input className="prompt" type="text" placeholder="Search animals..." />
        <i className="search icon"></i>
      </div>
      <div className="results"></div>
    </div>
  );
}
export default Search;

import React from 'react';
// import { Route, Switch } from 'react-router-dom';

const Search = (props) => {
  return (
    <div className="ui category search container pad_10">
      <div className="ui icon input">
        <input className="prompt" name="searchInput" type="text" placeholder="Search by title or description..." value={props.value} onChange={props.onChange} />
        <i className="search icon"></i>
      </div>
      <div className="results"></div>
    </div>
  );  
}
export default Search;

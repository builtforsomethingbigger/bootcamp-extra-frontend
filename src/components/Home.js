import React from 'react';
import PostsPage from './PostsPage';
import { Route, Switch } from 'react-router-dom';

function Home(props) {
  return (
    <div className="Home">
      <PostsPage />
    </div>
  );
}

export default Home;

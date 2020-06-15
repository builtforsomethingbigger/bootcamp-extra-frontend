import React from 'react';
// import logo from './logo.svg';
import './App.css';
import { Home } from './components';
// import { Route, Switch } from 'react-router-dom';

class App extends React.Component {

  render() {
    // console.log(this.state)
    return (
      <div className="App">
        <Home />
      </div>
    )
  }
}

export default App;

import React from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './components/Home';

class App extends React.Component {
  
  render() {
    // console.log(this.state)
    return (
      <div>
        <Home />
      </div>
    );
  }
}

export default App;

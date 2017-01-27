import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
      <link href="https://fonts.googleapis.com/css?family=Luckiest+Guy|Raleway" rel="stylesheet" />
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2 className="header">Welcome to React</h2>
        </div>
        <p className="App-intro">
          Hello world!
        </p>
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Clock from './Clock';

import Calculator from './temperature/Calculator';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <div id="clock-container" className="App-intro">
          Just got started.
          <Clock />
          <Calculator />
        </div>
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import RaisedButton from 'material-ui/RaisedButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

class App extends Component {
  render() {
  
    const myClickHandler = () => {
      console.log("alistair");
      alert("LOL");
    }

    return (
        <MuiThemeProvider>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to react</h1>
        </header>
        <RaisedButton label="Primary" onClick={myClickHandler} primary={true}></RaisedButton>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
        </MuiThemeProvider>
    );
  }
}

export default App;

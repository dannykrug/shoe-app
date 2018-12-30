import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import MainContainer from '../src/components/MainContainer'

class App extends Component {
  render() {
    return (
      <div>
      <h1>Shoe Closet</h1>
      <MainContainer />
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';
import Header from './components/Header';
import "./sass/main.scss";

export class App extends Component {
  render() {
    return (
      <div>
        <Header/>
      </div>
    )
  }
}

export default App
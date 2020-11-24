import React, { Component } from 'react';
import Carousel from './components/Carousel';
import Header from './components/Header';
import "./sass/main.scss";

export class App extends Component {
  render() {
    return (
      <div>
        <Header/>
        <Carousel/>
      </div>
    )
  }
}

export default App
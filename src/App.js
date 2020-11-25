import React, { Component } from 'react';
import About from './components/About';
import Carousel from './components/Carousel';
import Header from './components/Header';
import Purpose from './components/Purpose';
import "./sass/main.scss";

export class App extends Component {
  render() {
    return (
      <div className="app">
        <Header/>
        <Carousel/>
        <Purpose/>
        <About/>
      </div>
    )
  }
}

export default App
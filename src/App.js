import React, { Component } from 'react';
import About from './components/About';
import Carousel from './components/Carousel';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Header from './components/Header';
import Purpose from './components/Purpose';
import Team from './components/Team';
import "./sass/main.scss";

export class App extends Component {
  render() {
    return (
      <div className="app">
        <Header/>
        <Carousel/>
        <Purpose/>
        <About/>
        <Team/>
        <Contact/>
        <Footer/>
      </div>
    )
  }
}

export default App
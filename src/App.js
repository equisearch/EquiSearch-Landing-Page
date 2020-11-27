import React, { Component } from 'react';
import About from './components/About';
import Carousel from './components/Carousel';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Header from './components/Header';
import Modal from './components/Modal';
import Purpose from './components/Purpose';
import Team from './components/Team';
import "./sass/main.scss";

export class App extends Component {

  constructor() {
    super();
    this.state = {
      modal: false
    }
  }

  // functions
  openModal() {
    this.setState({
      modal: true
    });
  }
  closeModal() {
    this.setState({
      modal: false
    });
  }

  render() {
    return (
      <div className="app">
        <Header open={this.openModal.bind(this)}/>
        <Carousel/>
        <Purpose/>
        <About/>
        <Team/>
        <Contact/>
        <Footer/>
        <Modal modal={this.state.modal} close={this.closeModal.bind(this)}/>
      </div>
    )
  }
}

export default App
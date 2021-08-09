import React, { Component } from 'react';
import About from './components/sections/About';
import Contact from './components/sections/Contact';
import Footer from './components/sections/Footer';
import Header from './components/sections/Header';
import Modal from './components/utils/Modal';
import Purpose from './components/sections/Purpose';
import Team from './components/sections/Team';
import "./sass/main.scss";
import { smoothScroll, backToTop } from './components/utils/dom.js';
import LinkButton from './components/utils/LinkButton';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp } from '@fortawesome/free-solid-svg-icons'
import Showcase from './components/sections/Showcase';
import { createStore, StoreProvider } from 'easy-peasy';
import model from './model';

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
  componentDidMount() {
    smoothScroll();
    backToTop();
  }

  render() {

    const store = createStore(model);

    return (
      <StoreProvider store={store}>
        <div className="app">
          <Header open={this.openModal.bind(this)}/>
          <Showcase/>
          <Purpose/>
          <About/>
          <Team/>
          <Contact/>
          <Footer/>
          <Modal modal={this.state.modal} close={this.closeModal.bind(this)}/>
          <div className="back-to-top">
            <LinkButton text={
              <FontAwesomeIcon icon={faChevronUp} style={{
                color: "#fff",
                fontSize: "1rem"
              }}/>
            } link="#top"/>
          </div>
        </div>
      </StoreProvider>
    )
  }
}

export default App
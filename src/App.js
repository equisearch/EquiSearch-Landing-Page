import React, { Component, useEffect, useState } from 'react';
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

export const App = () => {

  useEffect(() => {
    smoothScroll();
    backToTop();
  }, []);

  const store = createStore(model);

  return (
    <StoreProvider store={store}>
      <div className="app">
        <Header/>
        <Showcase/>
        <Purpose/>
        <About/>
        <Team/>
        <Contact/>
        <Footer/>
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

export default App
import React, { Component } from 'react';
import Button from './components/Button';
import "./sass/main.scss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons'

export class App extends Component {
  render() {
    return (
      <div>
        <Button text="SEND"/>
        <FontAwesomeIcon icon={faCoffee} />
      </div>
    )
  }
}

export default App
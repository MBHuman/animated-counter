import React from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import './App.scss';
import Quote from './features/quote/Quote';
import { Row } from 'react-bootstrap';
import TestAnimation from './features/quote/TestAnimation';

function App() {
  return (
    <Row className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Quote />
      </header>
    </Row>
  );
}

export default App;

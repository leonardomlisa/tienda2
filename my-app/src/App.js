// src/App.js
import React from 'react';
import Brand from './components/Brand';
import CategoryList from './components/CategoryList';

function App() {
  return (
    <div className="App">
      <Brand />
      <CategoryList />
    </div>
  );
}

export default App;

import React from 'react';
import Navbar from './components/Navbar';
import ItemListContainer from './components/ItemListContainer';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <ItemListContainer greeting="Welcome to the Shop!" />
    </div>
  );
}

import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

import './App.css';

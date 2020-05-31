import React from 'react';
import logo from './logo.svg';
import './App.css';

import Champion from './components/Champion';

function App() {
  return (
    <div className="container">
      <div className="column">
        <Champion id="Jax" />
        <Champion id="LeeSin" />
        <Champion id="Taliyah" />
        <Champion id="Caitlyn" />
        <Champion id="Thresh" />
      </div>
      <div className="column">
        <Champion id="Malphite" />
        <Champion id="Kayn" />
        <Champion id="Orianna" />
        <Champion id="Ezreal" />
        <Champion id="Leona" />
      </div>
    </div>
  );
}

export default App;

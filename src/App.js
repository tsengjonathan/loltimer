import React from 'react';
import './App.css';

import Champion from './components/Champion';
import { APIContextProvider } from './contexts/APIContext';

function App() {
  return (
    <APIContextProvider>
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
    </APIContextProvider>
  );
}

export default App;

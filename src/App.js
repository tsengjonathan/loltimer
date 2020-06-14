import React from 'react';
import './App.css';

import Champion from './components/Champion';
import { APIContextProvider } from './contexts/APIContext';

function App() {
  return (
    <APIContextProvider>
      <div className="container">
        <div className="column">
          <Champion />
          <Champion />
          <Champion />
          <Champion />
          <Champion />
        </div>
        <div className="column">
          <Champion />
          <Champion />
          <Champion />
          <Champion />
          <Champion />
        </div>
      </div>
    </APIContextProvider>
  );
}

export default App;

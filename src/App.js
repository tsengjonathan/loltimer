import React from 'react';
import logo from './logo.svg';
import './App.css';

import AssetLoader from './components/AssetLoader';

function App() {
  return (
    <div className="App">
      <AssetLoader type="champion" value="Aatrox" />
    </div>
  );
}

export default App;

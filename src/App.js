import React from 'react';
import logo from './logo.svg';
import './App.css';

import TimerChip from './components/TimerChip';

function App() {
  return (
    <div className="App">
      <TimerChip duration={15} />
    </div>
  );
}

export default App;

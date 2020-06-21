import React from 'react';

import Champion from './components/Champion';
import SummonerDetail from './components/SummonerDetail';
import { APIContextProvider } from './contexts/APIContext';

function App() {
  return (
    <APIContextProvider>
      <main>
        <div className="columns is-vcentered">
          <div className="column">
            <SummonerDetail />
            <Champion index={0} />
            <Champion index={1} />
          </div>
          <div className="column">
            <Champion index={2} />
            <Champion index={3} />
            <Champion index={4} />
          </div>
          </div>
        </main>
    </APIContextProvider>
  );
}

export default App;

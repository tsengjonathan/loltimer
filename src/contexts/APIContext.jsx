import React, { createContext, useEffect, useState } from 'react';
import _ from 'lodash';

import {
  fetchAPIVersion,
  fetchAllChampions,
  fetchChampion,
  fetchSummonerSpells
} from '../utils/constFetcher';

const APIContext = createContext();

function APIContextProvider({ children }) {
  const [version, setVersion] = useState('');
  const [champions, setChampions] = useState({});
  const [summonerSpells, setSummonerSpells] = useState({});
  const [cachedChampions, setCachedChampions] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      fetchAPIVersion().then((res) => {
        setVersion(res);
        fetchAllChampions(res).then(data => setChampions(data));
        fetchSummonerSpells(res).then(data => setSummonerSpells(data));
      });
    }
    fetchData();
  }, []);

  const addChampion = async (id) => {
    return fetchChampion(id).then(res => {
      const newChampions = _.clone(champions);
      newChampions[id] = _.merge(champions[id], res);
      setChampions(newChampions);
      setCachedChampions([...cachedChampions, id]);
      return res;
    });
  }

  return (
    <APIContext.Provider value={{
      version, champions, summonerSpells, addChampion, cachedChampions
    }}>
      {children}
    </APIContext.Provider>
  );
}

export {
  APIContext,
  APIContextProvider
}
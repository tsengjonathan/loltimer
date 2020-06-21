import React, { createContext, useEffect, useState } from 'react';
import _ from 'lodash';

import {
  fetchAPIVersion,
  fetchAllChampions,
  fetchSummonerSpells
} from '../api/assets';

import {
  fetchLiveGame
} from '../api/game';

const APIContext = createContext();

function APIContextProvider({ children }) {
  const [version, setVersion] = useState('');
  const [champions, setChampions] = useState({});
  const [spells, setSpells] = useState({});
  const [summonerId, setSummonerId] = useState('');
  const [players, setPlayers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      fetchAPIVersion().then((res) => {
        setVersion(res);
        fetchAllChampions(res).then(data => {
          const map = {};
          for (let champion of Object.values(data)) {
            const { key } = champion;
            map[key] = champion;
          };
          setChampions(map);
        });
        fetchSummonerSpells(res).then(data => {
          const map = {};
          for (let spell of Object.values(data)) {
            const { key } = spell;
            map[key] = spell;
          }
          setSpells(map);
        });
      });
    }
    fetchData();
  }, []);

  useEffect(() => {
    if (!_.isEmpty(summonerId)) {
      fetchLiveGame(summonerId).then(res => {
        const { participants } = res;
        const friendlyTeamId = participants.find(participant => participant.summonerId === summonerId).teamId;
        return participants.filter(participant => participant.teamId !== friendlyTeamId);
      }).then(participants => setPlayers(participants));
    }
  }, [summonerId]);

  return (
    <APIContext.Provider value={{
      version, champions, spells, setSummonerId, players
    }}>
      {children}
    </APIContext.Provider>
  );
}

export {
  APIContext,
  APIContextProvider
}
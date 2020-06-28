import React, { useContext } from 'react';
import _ from 'lodash';

import { APIContext } from '../../contexts/APIContext';

import SpellTimer from '../SpellTimer';
import Level from '../Level';

export default function Champion({ index }) {
  const { players, champions, version } = useContext(APIContext);
  
  const urlPrefix = `https://ddragon.leagueoflegends.com/cdn/${version}/img`;

  if (_.isEmpty(players) || _.isEmpty(champions) || _.isEmpty(version)) {
    return null;
  }
  
  const summonerInfo = players[index];
  const champion = champions[summonerInfo.championId];
  const { spell1Id, spell2Id } = summonerInfo;

  return (
    <div className="box champion-box">
      <div className="level">
        <div className="level-left">
          <figure className="image is-96x96">
            <img
              src={`${urlPrefix}/champion/${champion.id}.png`}
              alt="Champion Icon"
            />
          </figure>
          <div className="title ml-4">
            <h1 className="title">{champion.name}</h1>
            <h2 className="subtitle is-6">{summonerInfo.summonerName}</h2>
          </div>
        </div>
        <div className="level-right">
          <Level index={index} />
        </div>
      </div>
      <SpellTimer id={spell1Id} index={index} />
      <SpellTimer id={spell2Id} index={index} />
    </div>
  )
}
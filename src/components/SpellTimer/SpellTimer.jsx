import React, { useContext, useEffect, useState, useCallback } from 'react';
import _ from 'lodash';

import { APIContext } from '../../contexts/APIContext';

import { isTeleport, calculateTeleportCooldown } from '../../util/teleport';

export default function SpellTimer({ id, index }) {
  const { version, spells, getLevel } = useContext(APIContext);
  const [isActivated, setActivated] = useState(false);
  const [timer, setTimer] = useState(-1);

  const spell = spells[id];
  const cooldown = isTeleport(spell) ? calculateTeleportCooldown(getLevel(index)) : _.get(spell, ['cooldown', 0]);

  const urlPrefix = `https://ddragon.leagueoflegends.com/cdn/${version}/img`;
  
  const resetTimer = useCallback(() => {
    setTimer(cooldown);
    setActivated(false);
  }, [cooldown]);

  useEffect(() => {
    setTimer(cooldown);
  }, [cooldown])
  
  useEffect(() => {
    if (isActivated && timer > 0) {
      const interval = setInterval(() => setTimer(timer - 1), 1000);
      return () => {
        clearInterval(interval);
      }
    } else if (timer === 0) {
      resetTimer();
    }
  }, [isActivated, timer, resetTimer]);

  const handleClick = () => {
    if (isActivated) {
      setTimer(cooldown);
    }
    setActivated(!isActivated);
  }
  
  if (!spell) {
    return <progress className="progress" />
  }

  return (
    <div className="level">
      <figure className="image is-24x24 mr-2">
        <img
          className="is-rounded"
          src={`${urlPrefix}/spell/${spell.image.full}`}
          alt="Champion Icon"
        />
      </figure>
      <div className="level-item">
        <progress className="progress" max={cooldown} value={timer} />
      </div>
      <span class="tag ml-2">
        {_.round(timer)}
      </span>
      <button className="button is-small ml-2" onClick={handleClick}>
        {isActivated ? "Stop" : "Start"}
      </button>
    </div>
  )
}
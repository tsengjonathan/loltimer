import React, { useEffect, useCallback } from 'react';
import Dialog from '@material-ui/core/Dialog';
import CardMedia from '@material-ui/core/CardMedia';

import './chip.css';

const gameMode = "CLASSIC";

export default function SummonerSelect({ spellData, version, isOpen, onClose, setSpell }) {
  const handleClick = useCallback((event) => {
    setSpell(event.target.title);
    onClose();
  }, [onClose, setSpell]);
  
  const spellImages = [];
  useEffect(() => {
    for (let spellId in spellData) {
      const spell = spellData[spellId];
      const imageUrl = `http://ddragon.leagueoflegends.com/cdn/${version}/img/spell/${spell.image.full}`;
      if (spell.modes.includes(gameMode)) {
        spellImages.push(<CardMedia className="summoner-icon" image={imageUrl} key={spellId} title={spellId} onClick={handleClick} />);
      }
    }
  }, [handleClick, spellData, spellImages, version]);

  return (
    <Dialog open={isOpen} onClose={onClose}>
      { spellImages }
    </Dialog>
  );
}
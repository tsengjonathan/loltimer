import React, { useEffect, useCallback } from 'react';

import makeStyles from '@material-ui/core/styles/makeStyles';
import Dialog from '@material-ui/core/Dialog';
import CardMedia from '@material-ui/core/CardMedia';

const gameMode = "CLASSIC";

const useStyles = makeStyles({
  root: {
    width: '4rem',
    height: '4rem'
  }
});

export default function SummonerSelect({ spellData, version, isOpen, onClose, setSpell }) {
  const classes = useStyles();

  const handleClick = useCallback((event) => {
    setSpell(event.target.title);
    onClose();
  }, [onClose, setSpell]);
  
  const spellImages = [];
  useEffect(() => {
    for (let spellId in spellData) {
      const spell = spellData[spellId];
      const imageUrl = `https://ddragon.leagueoflegends.com/cdn/${version}/img/spell/${spell.image.full}`;
      if (spell.modes.includes(gameMode)) {
        spellImages.push(
          <CardMedia
            classes={{ root: classes.root }}
            image={imageUrl}
            key={spellId}
            title={spellId}
            onClick={handleClick}
          />
        );
      }
    }
  }, [handleClick, spellData, spellImages, version, classes]);

  return (
    <Dialog open={isOpen} onClose={onClose}>
      { spellImages }
    </Dialog>
  );
}
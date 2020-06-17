import React, { useEffect, useCallback, useContext } from 'react';

import makeStyles from '@material-ui/core/styles/makeStyles';
import Dialog from '@material-ui/core/Dialog';
import CardMedia from '@material-ui/core/CardMedia';

import { APIContext } from '../../contexts/APIContext';

const gameMode = "CLASSIC";

const useStyles = makeStyles({
  root: {
    width: '4rem',
    height: '4rem'
  }
});

export default function SummonerSelect({ version, isOpen, onClose, setSpell }) {
  const classes = useStyles();
  const { summonerSpells } = useContext(APIContext);

  const handleClick = useCallback((event) => {
    setSpell(event.target.title);
    onClose();
  }, [onClose, setSpell]);
  
  const spellImages = [];
  useEffect(() => {
    for (let spellId in summonerSpells) {
      const spell = summonerSpells[spellId];
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
  }, [handleClick, summonerSpells, spellImages, version, classes]);

  return (
    <Dialog open={isOpen} onClose={onClose}>
      { spellImages }
    </Dialog>
  );
}
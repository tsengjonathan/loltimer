import React, { useState, useEffect, useCallback, useContext } from 'react';
import Chip from '@material-ui/core/Chip';
import Avatar from '@material-ui/core/Avatar';

import EditIcon from '@material-ui/icons/Edit';
import SummonerSelect from './SummonerSelect';

import { APIContext } from '../../contexts/APIContext';

export default function SummonerTimer({ spell: spellId, setSpell, imgUrl, cooldown: spellCooldown }) {
  const { version } = useContext(APIContext);
  const [isActivated, setActivated] = useState(false);
  const [timer, setTimer] = useState(-1);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const resetTimer = useCallback(() => {
    setTimer(spellCooldown);
    setActivated(false);
  }, [spellCooldown]);

  // Reset timer if the duration prop changes
  useEffect(() => {
    resetTimer();
  }, [resetTimer]);

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
      setTimer(spellCooldown);
    }
    setActivated(!isActivated);
  }

  const openDialog = () => {
    if (!isActivated) {
      setIsDialogOpen(true);
    }
  }

  const closeDialog = () => {
    setIsDialogOpen(false);
  }

  const icon = <EditIcon />
  const avatar = <Avatar src={imgUrl} alt={spellId} />

  return (
    <>
      <Chip
        avatar={avatar}
        onClick={handleClick}
        onDelete={openDialog}
        label={timer}
        deleteIcon={icon}
      />
      <SummonerSelect
        isOpen={isDialogOpen}
        onClose={closeDialog}
        version={version}
        setSpell={setSpell}
      />
    </>
  );
}
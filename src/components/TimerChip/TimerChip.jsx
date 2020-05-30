import React, { useState, useEffect } from 'react';
import Chip from '@material-ui/core/Chip';

import CancelIcon from '@material-ui/icons/Cancel';
import CheckIcon from '@material-ui/icons/CheckCircle';

export default function TimerChip({ duration }) {
  const [isActivated, setActivated] = useState(false);
  const [timer, setTimer] = useState(duration);

  useEffect(() => {
    if (isActivated && timer > 0) {
      const interval = setInterval(() => setTimer(timer - 1), 1000);
      return () => {
        clearInterval(interval);
      }
    } else if (timer === 0) {
      setActivated(false);
      setTimer(duration);
    }
  }, [isActivated, timer, duration]);

  const handleClick = () => {
    if (isActivated) {
      setTimer(duration);
    }
    setActivated(!isActivated);
  }

  const icon = isActivated ? <CancelIcon /> : <CheckIcon />

  return (
    <Chip onDelete={handleClick} label={timer} deleteIcon={icon} />
  );
}
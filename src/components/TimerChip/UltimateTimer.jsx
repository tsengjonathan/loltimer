import React, { useState, useEffect } from 'react';
import Chip from '@material-ui/core/Chip';
import Avatar from '@material-ui/core/Avatar';

import CancelIcon from '@material-ui/icons/Cancel';
import CheckIcon from '@material-ui/icons/CheckCircle';

export default function UltimateTimer({ duration }) {
  const [isActivated, setActivated] = useState(false);
  const [timer, setTimer] = useState(duration);

  // Reset timer if the duration prop changes
  useEffect(() => {
    setTimer(duration);
    setActivated(false);
  }, [duration])

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
  const avatar = <Avatar>U</Avatar>

  return (
    <Chip avatar={avatar} onDelete={handleClick} label={timer} deleteIcon={icon} />
  );
}
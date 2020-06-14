import React from 'react';

import makeStyles from '@material-ui/core/styles/makeStyles';
import ToggleButton from '@material-ui/lab/ToggleButton';

const useStyles = makeStyles({
  root: {
    width: '2rem',
    height: '2rem',
    marginLeft: '.5rem',
    borderRadius: '1rem',
    padding: 0
  },
  selected: {
    border: '2px solid #38b4b2',
    marginLeft: '.5rem !important'
  }
});

export default function CooldownToggle({ img, cooldown, id, selected, setSelected }) {
  const classes = useStyles();
  return (
    <ToggleButton
      classes={{ root: classes.root, selected: classes.selected }}
      selected={selected}
      onChange={() => setSelected(!selected)}
      value={id}
    >
      <img className="cooldown-image" src={img} alt={id} />
    </ToggleButton>
  );
}
import React from 'react';

import ToggleButton from '@material-ui/lab/ToggleButton';

import './cooldownToggle.css';

export default function CooldownToggle({ img, cooldown, id, selected, setSelected }) {
  return (
    <ToggleButton className="cooldown-button" selected={selected} onChange={() => setSelected(!selected)} value={id}>
      <img src={img} alt={id} />
    </ToggleButton>
  );
}
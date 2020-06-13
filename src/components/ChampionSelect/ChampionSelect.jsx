import React, { useContext } from 'react';
import _ from 'lodash';

import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';

import { APIContext } from '../../contexts/APIContext';

export default function ChampionSelect({ id, onChange }) {
  const { champions } = useContext(APIContext);

  const championList = _.values(champions).map((champion) => (
    <MenuItem key={champion.id} value={champion.id}>{champion.name}</MenuItem>)
  );

  return (
    <Select value={id} onChange={onChange}>
      { championList }
    </Select>
  );
}
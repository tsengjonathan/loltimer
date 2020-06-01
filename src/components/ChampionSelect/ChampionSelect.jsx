import React, { useState, useEffect } from 'react';
import _ from 'lodash';

import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';

import { fetchAllChampions } from '../../utils/constFetcher';

export default function ChampionSelect({ id, onChange }) {
  const [champions, setChampions] = useState([]);

  useEffect(() => {
    fetchAllChampions().then((res) => setChampions(_.values(res)));
  }, []);

  const championList = champions.map((champion) => <MenuItem key={champion.id} value={champion.id}>{champion.name}</MenuItem>);

  return (
    <Select value={id} onChange={onChange}>
      { championList }
    </Select>
  );
}
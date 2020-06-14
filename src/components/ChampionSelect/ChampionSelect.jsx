import React, { useContext } from 'react';
import _ from 'lodash';

import makeStyles from '@material-ui/core/styles/makeStyles';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import Input from '@material-ui/core/Input';

import { APIContext } from '../../contexts/APIContext';

const useStyles = makeStyles({
  input: {
    flex: 1
  }
});

export default function ChampionSelect({ id, onChange }) {
  const classes = useStyles();
  const { champions } = useContext(APIContext);

  const championList = _.values(champions).map((champion) => (
    <MenuItem key={champion.id} value={champion.id}>{champion.name}</MenuItem>)
  );

  const input = <Input classes={{ root: classes.input }} />

  return (
    <Select value={id} onChange={onChange} input={input}>
      { championList }
    </Select>
  );
}
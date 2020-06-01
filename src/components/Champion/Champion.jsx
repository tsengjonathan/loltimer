import React, { useState, useEffect } from 'react';
import _ from 'lodash';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';

import { fetchAPIVersion, fetchChampion } from '../../utils/constFetcher';
import TimerChip from '../../components/TimerChip';
import ChampionSelect from '../../components/ChampionSelect';

import './champion.css';

export default function Champion() {
  const [version, setVersion] = useState(undefined);
  const [id, setId] = useState("Aatrox");
  const [data, setData] = useState({});

  const imageUrl = `http://ddragon.leagueoflegends.com/cdn/${version}/img/champion/${id}.png`;

  useEffect(() => {
    fetchAPIVersion().then(res => setVersion(res));
  }, []);

  useEffect(() => {
    fetchChampion(id).then(res => setData(res));
  }, [id])

  const onChampionChange = (event) => {
    setId(event.target.value);
  }

  const ultTimer = _.get(data.spells, '3.cooldown[0]', 0);

  if (!version) {
    return null;
  }

  return (
    <Card className="card">
      <CardMedia className="card-media" image={imageUrl} title={id} />
      <div className="card-details">
        <CardContent>
          <ChampionSelect id={id} onChange={onChampionChange} />
        </CardContent>
        <div className="card-timers">
          <TimerChip duration={ultTimer} />
          <TimerChip duration={300} />
          <TimerChip duration={300} />
        </div>
      </div>
    </Card>
  );
}
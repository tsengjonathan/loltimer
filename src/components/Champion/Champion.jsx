import React, { useState, useEffect } from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

import { getDataDragonVersion, getChampionInfo } from '../../utils/constFetcher';
import TimerChip from '../../components/TimerChip';

import './champion.css';

export default function Champion({ id }) {
  const [data, setData] = useState({});
  const [version, setVersion] = useState(undefined);

  const imageUrl = `http://ddragon.leagueoflegends.com/cdn/${version}/img/champion/${id}.png`;

  useEffect(() => {
    getDataDragonVersion().then(res => setVersion(res));
    getChampionInfo(id).then(res => setData(res));
  }, [id]);

  if (!version) {
    return null;
  }

  console.log(data);

  return (
    <Card className="card">
      <CardMedia className="card-media" image={imageUrl} title={id} />
      <div className="card-details">
        <CardContent>
          <Typography>
            {data.name}
          </Typography>
        </CardContent>
        <div className="card-timers">
          <TimerChip duration={300} />
          <TimerChip duration={300} />
          <TimerChip duration={300} />
        </div>
      </div>
    </Card>
  );
}
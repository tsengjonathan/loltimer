import React, { useState, useEffect } from 'react';
import _ from 'lodash';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';

import { fetchAPIVersion, fetchChampion, fetchSummonerSpells } from '../../utils/constFetcher';
import { UltimateTimer, SummonerTimer } from '../../components/TimerChip';
import ChampionSelect from '../../components/ChampionSelect';

import './champion.css';

export default function Champion() {
  const [version, setVersion] = useState("");
  const [id, setId] = useState("Taliyah");
  const [data, setData] = useState({});
  const [spellData, setSpellData] = useState({});
  const [spellOne, setSpellOne] = useState("SummonerDot");
  const [spellTwo, setSpellTwo] = useState("SummonerFlash");

  const championUrl = `https://ddragon.leagueoflegends.com/cdn/${version}/img/champion/${id}.png`;
  const spellOneUrl = `https://ddragon.leagueoflegends.com/cdn/${version}/img/spell/${spellOne}.png`;
  const spellTwoUrl = `https://ddragon.leagueoflegends.com/cdn/${version}/img/spell/${spellTwo}.png`;

  useEffect(() => {
    fetchAPIVersion().then(res => setVersion(res));
    fetchSummonerSpells().then(res => setSpellData(res));
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
      <CardMedia className="card-media" image={championUrl} title={id} />
      <div className="card-details">
        <CardContent>
          <ChampionSelect id={id} onChange={onChampionChange} />
        </CardContent>
        <div className="card-timers">
          <UltimateTimer duration={ultTimer} />
          <SummonerTimer spell={spellOne} setSpell={setSpellOne} spellData={spellData} imgUrl={spellOneUrl} />
          <SummonerTimer spell={spellTwo} setSpell={setSpellTwo} spellData={spellData} imgUrl={spellTwoUrl} />
        </div>
      </div>
    </Card>
  );
}
import React, { useState, useEffect, useContext } from 'react';
import _ from 'lodash';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';

import { APIContext } from '../../contexts/APIContext';
import { UltimateTimer, SummonerTimer } from '../../components/TimerChip';
import ChampionSelect from '../../components/ChampionSelect';

import './champion.css';

export default function Champion() {
  const { version, champions, addChampion, cachedChampions, summonerSpells } = useContext(APIContext);
  const [id, setId] = useState('');
  const [data, setData] = useState({});
  const [spellOne, setSpellOne] = useState("SummonerDot");
  const [spellTwo, setSpellTwo] = useState("SummonerFlash");

  const championUrl = _.isEmpty(id)
    ? 'http://ddragon.leagueoflegends.com/cdn/10.12.1/img/profileicon/588.png'
    : `https://ddragon.leagueoflegends.com/cdn/${version}/img/champion/${id}.png`;
  const spellOneUrl = `https://ddragon.leagueoflegends.com/cdn/${version}/img/spell/${spellOne}.png`;
  const spellTwoUrl = `https://ddragon.leagueoflegends.com/cdn/${version}/img/spell/${spellTwo}.png`;

  useEffect(() => {
    const fetchChampionInfo = async (championId) => {
      if (cachedChampions.includes(championId)) {
        setData(champions[championId]);
      } else {
        const newData = await addChampion(championId);
        setData(newData);
      }
    }
    if (id in champions) {
      fetchChampionInfo(id);
    }
  }, [id, champions, cachedChampions, addChampion]);

  const onChampionChange = (event) => {
    setId(event.target.value);
  }

  const ultTimer = _.get(data, 'spells[3].cooldown[0]', 0);

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
          <SummonerTimer spell={spellOne} setSpell={setSpellOne} spellData={summonerSpells} imgUrl={spellOneUrl} />
          <SummonerTimer spell={spellTwo} setSpell={setSpellTwo} spellData={summonerSpells} imgUrl={spellTwoUrl} />
        </div>
      </div>
    </Card>
  );
}
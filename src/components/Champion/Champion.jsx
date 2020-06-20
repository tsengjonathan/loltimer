import React, { useState, useEffect, useContext } from 'react';
import _ from 'lodash';
import makeStyles from '@material-ui/core/styles/makeStyles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';

import { APIContext } from '../../contexts/APIContext';
import { SummonerTimer } from '../../components/TimerChip';
import ChampionSelect from '../../components/ChampionSelect';
import CooldownToggle from '../../components/CooldownToggle';

import ionianBootsImg from '../../assets/IonianBoots.png';
import cosmicInsightImg from '../../assets/CosmicInsight.png';

const ionianBoots = { img: ionianBootsImg, cooldown: 0.1, id: 'IonianBoots' }
const cosmicInsight = { img: cosmicInsightImg, cooldown: 0.05, id: 'CosmicInsight' }

const useStyles = makeStyles({
  root: {
    display: 'flex',
    "&:last-child": {
      paddingBottom: '1rem'
    }
  }
});

export default function Champion() {
  const classes = useStyles();
  const { version, champions, addChampion, cachedChampions, summonerSpells } = useContext(APIContext);
  const [id, setId] = useState('');
  const [data, setData] = useState({});
  const [spellOne, setSpellOne] = useState("SummonerDot");
  const [spellTwo, setSpellTwo] = useState("SummonerFlash");
  const [bootsClicked, setBootsClicked] = useState(false);
  const [cosmicClicked, setCosmicClicked] = useState(false);
  const [spellOneCooldown, setSpellOneCooldown] = useState(0);
  const [spellTwoCooldown, setSpellTwoCooldown] = useState(0);

  const championUrl = _.isEmpty(id)
    ? `https://ddragon.leagueoflegends.com/cdn/${version}/img/profileicon/588.png`
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

  useEffect(() => {
    const calculateCooldown = (spellId) => {
      let cooldown = _.get(summonerSpells[spellId], 'cooldown[0]', 0);
      let reduction = 1;
      if (bootsClicked) {
        reduction -= ionianBoots.cooldown;
      }
      if (cosmicClicked) {
        reduction -= cosmicInsight.cooldown;
      }
      return cooldown * reduction;
    }
    setSpellOneCooldown(calculateCooldown(spellOne));
    setSpellTwoCooldown(calculateCooldown(spellTwo));
  }, [bootsClicked, cosmicClicked, spellOne, spellTwo, summonerSpells]);

  const onChampionChange = (event) => {
    setId(event.target.value);
  }

  // const ultTimer = _.get(data, 'spells[3].cooldown[0]', 0);

  if (!version) {
    return null;
  }

  return (
    <Card className="card">
      <CardMedia className="card-media" image={championUrl} title={id} />
      <div className="card-details">
        <div className="card-top">
          <CardContent classes={{ root: classes.root }}>
            <ChampionSelect id={id} onChange={onChampionChange} />
            <CooldownToggle {...ionianBoots} selected={bootsClicked} setSelected={setBootsClicked} />
            <CooldownToggle {...cosmicInsight} selected={cosmicClicked} setSelected={setCosmicClicked} />
          </CardContent>
        </div>
        <div className="card-timers">
          <SummonerTimer spell={spellOne} setSpell={setSpellOne} spellData={summonerSpells} imgUrl={spellOneUrl} cooldown={spellOneCooldown} />
          <SummonerTimer spell={spellTwo} setSpell={setSpellTwo} spellData={summonerSpells} imgUrl={spellTwoUrl} cooldown={spellTwoCooldown} />
        </div>
      </div>
    </Card>
  );
}
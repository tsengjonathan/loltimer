import React, { useState, useContext } from 'react';
import _ from 'lodash';

import { APIContext } from '../../contexts/APIContext';
import { fetchSummonerInfo } from '../../api/game';

export default function SummonerDetail() {
  const { setSummonerId } = useContext(APIContext);
  const [summonerName, setSummonerName] = useState('');
  const [isSearched, setIsSearched] = useState(false);
  const [summonerDetail, setSummonerDetail] = useState({});

  const changeSummonerName = (event) => {
    setSummonerName(event.target.value);
  }

  const searchSummoner = () => {
    if (!_.isEmpty(summonerName)) {
      fetchSummonerInfo(summonerName).then(res => {
        const { id } = res;
        setSummonerDetail(res);
        setSummonerId(id);
        setIsSearched(true);
      });
    }
  }

  const searchBox = (
    <div className="field has-addons u-justify-content-center" style={isSearched ? {} : { justifyContent: 'center' }}>
      <div className="control">
        <input className="input is-small" type="text" placeholder="Summoner Name" value={summonerName} onChange={changeSummonerName} />
      </div>
      <div className="control">
        <button className="button is-small" onClick={searchSummoner}>
          Search
      </button>
      </div>
    </div>
  );

  if (!isSearched) {
    return (
      <div className="box champion-box">
        { searchBox }
      </div>
    );
  }

  return (
    <div className="box champion-box">
      <div className="level">
        <div className="level-left">
          <figure className="image is-96x96">
            <img
              className="is-rounded"
              src={`https://ddragon.leagueoflegends.com/cdn/10.12.1/img/profileicon/${summonerDetail.profileIconId}.png`}
              alt="Summoner Profile"
            />
          </figure>
          <div className="level-item">
            <h1 className="title ml-4">{summonerDetail.name}</h1>
            <span className="tag ml-2">{summonerDetail.summonerLevel}</span>
          </div>
        </div>
        <div className="level-right">
          { searchBox }
        </div>
      </div>
    </div>
  );
}
import _ from 'lodash';

let dataDragonVersion = undefined;
let champions = {};

// TODO: Revert the pre-cache mechanism as it doesn't work.

async function getDataDragonVersion() {
  // Pre-cache the version number on initial load.
  if (!dataDragonVersion) {
    await fetch('https://ddragon.leagueoflegends.com/api/versions.json')
      .then(res => res.json())
      .then(json => {
      dataDragonVersion = json[0];
    });
  };
  return dataDragonVersion;
}

async function getChampionInfo(id) {
  if (_.isEmpty(champions)) {
    await fetch('http://ddragon.leagueoflegends.com/cdn/10.11.1/data/en_US/champion.json')
      .then(res => res.json())
      .then(json => {
        champions = json.data
      });
  }
  return champions[id];
}

export {
  getDataDragonVersion,
  getChampionInfo
}
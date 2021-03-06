async function fetchAPIVersion() {
  const versions = await fetch('https://ddragon.leagueoflegends.com/api/versions.json')
    .then(res => res.json());
  return versions[0];
}

async function fetchChampion(id) {
  const version = await fetchAPIVersion();
  const response = await fetch(`https://ddragon.leagueoflegends.com/cdn/${version}/data/en_US/champion/${id}.json`)
    .then(res => res.json());
  return response.data[id];
}

async function fetchAllChampions(versionInput) {
  const version = versionInput ? versionInput : await fetchAPIVersion();
  return await fetch(`https://ddragon.leagueoflegends.com/cdn/${version}/data/en_US/champion.json`)
    .then(res => res.json())
    .then(json => json.data);
}

async function fetchSummonerSpells(versionInput) {
  const version = versionInput ? versionInput : await fetchAPIVersion();
  return await fetch(`https://ddragon.leagueoflegends.com/cdn/${version}/data/en_US/summoner.json`)
    .then(res => res.json())
    .then(json => json.data);
}

export {
  fetchAPIVersion,
  fetchChampion,
  fetchAllChampions,
  fetchSummonerSpells
}
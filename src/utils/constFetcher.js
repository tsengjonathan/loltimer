async function fetchAPIVersion() {
  const versions = await fetch('https://ddragon.leagueoflegends.com/api/versions.json')
    .then(res => res.json());
  return versions[0];
}

async function fetchChampion(id) {
  const version = await fetchAPIVersion();
  const response = await fetch(`http://ddragon.leagueoflegends.com/cdn/${version}/data/en_US/champion/${id}.json`)
    .then(res => res.json());
  return response.data[id];
}

async function fetchAllChampions() {
  const version = await fetchAPIVersion();
  return await fetch(`http://ddragon.leagueoflegends.com/cdn/${version}/data/en_US/champion.json`)
    .then(res => res.json())
    .then(json => json.data);
}

async function fetchSummonerSpells() {
  const version = await fetchAPIVersion();
  return await fetch(`http://ddragon.leagueoflegends.com/cdn/${version}/data/en_US/summoner.json`)
    .then(res => res.json())
    .then(json => json.data);
}

export {
  fetchAPIVersion,
  fetchChampion,
  fetchAllChampions,
  fetchSummonerSpells
}
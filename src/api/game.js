const url = process.env.REACT_APP_PROXY_URL;

function fetchSummonerInfo(name) {
  return fetch(`${url}/summoner?summonerName=${name}`)
    .then(res => res.json());
}

function fetchLiveGame(summonerId) {
  return fetch(`${url}/live?summonerId=${summonerId}`)
    .then(res => res.json());
}

export {
  fetchSummonerInfo,
  fetchLiveGame
}
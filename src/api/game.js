const url = 'https://ncblbnp19k.execute-api.us-east-1.amazonaws.com/prod';

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
let dataDragonVersion = undefined;

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


export {
  getDataDragonVersion
}
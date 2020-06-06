import React, { useEffect, useState } from 'react';

import { getAPIVersion } from '../../utils/constFetcher';

export default function AssetLoader({ type, value, width = '4rem', height = width }) {
  const [version, setVersion] = useState(undefined);
  
  useEffect(() => {
    getAPIVersion().then(res => setVersion(res));
  }, []);

  const url = `https://ddragon.leagueoflegends.com/cdn/${version}/img/${type}/${value}.png`;

  return (
    <img style={{ height: height, width: width }} src={url} alt={value} />
  )
}
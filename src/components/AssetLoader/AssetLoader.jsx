import React, { useContext } from 'react';

import { APIContext } from '../../contexts/APIContext';

export default function AssetLoader({ type, value, width = '4rem', height = width }) {
  const { version } = useContext(APIContext);

  const url = `https://ddragon.leagueoflegends.com/cdn/${version}/img/${type}/${value}.png`;

  return (
    <img style={{ height: height, width: width }} src={url} alt={value} />
  );
}
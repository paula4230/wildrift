import React from 'react';
import Champion from './Champion';

export default function ChampionList({ champions }) {
  return ( 
    champions.map( champion => {
        return <Champion key={champion} champion={champion} />
    })

  );
}

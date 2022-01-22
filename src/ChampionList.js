import React from 'react';
import Champion from './Champion';

export default function ChampionList({ champions, toggleChampion }) {
  return ( 
    champions.map( champion => {
        return <Champion key={champion.id} toggleChampion={toggleChampion} champion={champion} />
    })

  );
}

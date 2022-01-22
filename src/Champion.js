import React from 'react';

export default function Champion({ champion, toggleChampion }) {
  function handleChampionClick() {
        toggleChampion(champion.id)
    }
    
  return (
  <div>
      <label>
        <input type='checkbox' checked={champion.in_use} onChange={handleChampionClick}></input>
        {champion.name}
        <br />
      </label>
  </div>
  );
}

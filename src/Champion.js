import React from 'react';

export default function Champion({ champion }) {
  return (
  <div>
      <label>
        <input type='checkbox' checked={champion.in_use}></input>
        {champion.name}
      </label>
  </div>
  );
}

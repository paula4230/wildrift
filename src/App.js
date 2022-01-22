import './App.css';
import React, { useState, useRef } from 'react';
import ChampionList from './ChampionList';
import { v4 as uuidv4 } from 'uuid';


function App() {
  const [champions, setChampions] = useState([])
  const championNameRef = useRef()

  function handleAddChampion(e){
    const name = championNameRef.current.value 
    if (name === '') return
    console.log(name)
    setChampions(prevChampions => {
      return [...prevChampions, { id: uuidv4(), name: name, complete: false}]
    })
    championNameRef.current.value = null
  }

  return (
    <>
    <ChampionList champions={champions}/>
    <input ref={championNameRef} type="text" />
    <button onClick={handleAddChampion}>Add Champion</button>
    </>
    
  )
}

export default App;

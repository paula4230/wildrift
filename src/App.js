import './App.css';
import React, { useState, useRef, useEffect } from 'react';
import ChampionList from './ChampionList';
import { v4 as uuidv4 } from 'uuid';


function App() {
  
  const [champions, setChampions] = useState([])
  const championNameRef = useRef()
  const LOCAL_STORAGE_KEY = 'championApp.champions'

  useEffect(() => {
    const storedChampions = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))
    if (storedChampions) setChampions(storedChampions)
  }, [])

  useEffect (() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(champions))
  }, [champions])
 
  function handleAddChampion(e){
    const name = championNameRef.current.value 
    if (name === '') return

    console.log(name)
    setChampions(prevChampions => {
      return [...prevChampions, { id: uuidv4(), name: name, complete: false}]
    })

    console.log(uuidv4())
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

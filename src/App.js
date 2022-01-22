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

  function toggleChampion(id) {
    const newChampions = [...champions]
    const champion = newChampions.find(champion => champion.id === id)
    champion.in_use = !champion.in_use
    setChampions(newChampions)
  }
 
  function handleAddChampion(e){
    const name = championNameRef.current.value 
    if (name === '') return

    console.log(name)
    setChampions(prevChampions => {
      return [...prevChampions, { id: uuidv4(), name: name, in_use: false}]
    })

    console.log(uuidv4())
    championNameRef.current.value = null
  }


  return (
    <>
    <div className="container">
      <div className="content">
        <span>
        
          <span className="centerpageheader">
            <h1>Go Wild!</h1>
          </span>
          <input ref={championNameRef} type="text" />
          <button onClick={handleAddChampion}>Add Champion</button>
          <br />
          <span className="centerpageheader">  
            <h3>Champion List 2022</h3>
          </span>
          <ChampionList champions={champions} toggleChampion={toggleChampion}/>
          </span>
      </div>
    </div>
    </>
    
  )
}

export default App;

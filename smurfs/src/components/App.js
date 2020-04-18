import React, { createContext, useState, useEffect } from "react";
import axios from 'axios'
import "./App.css";
import Smurfs from './Smurfs'

export const SmurfContext = createContext();

const App = () => {

  const [smurfList, setSmurfList] = useState()

  const addSmurf = (name, age, height) => {
    axios.post('http://localhost:3333/smurfs', {
      name: name,
      age: age,
      height: height
    })
    .then(response => {
      console.log(response)
      setSmurfList(response.data)
    })
  }

  useEffect(() => {
    axios.get('http://localhost:3333/smurfs')
    .then(response => {
      console.log(response)
      setSmurfList(response.data)
    })
  }, [])

  
  return (
    <div className="App">
      <SmurfContext.Provider value={{ smurfList, addSmurf} }>
        <Smurfs/>
      </SmurfContext.Provider>
    </div>
  );
}

export default App;

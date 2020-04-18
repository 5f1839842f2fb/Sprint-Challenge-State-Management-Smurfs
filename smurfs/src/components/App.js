import React, { createContext, useState, useEffect } from "react";
import axios from 'axios'
import "./App.css";
import Smurfs from './Smurfs'

export const SmurfContext = createContext();

const App = () => {
  
  const [smurfList, setSmurfList] = useState()
  
  useEffect(() => {
    axios.get('http://localhost:3333/smurfs')
    .then(response => {
      console.log(response)
      setSmurfList(response.data)
    })
  }, [])

  return (
    <div className="App">
      <SmurfContext.Provider value={smurfList}>
        <Smurfs/>
      </SmurfContext.Provider>
    </div>
  );
}

export default App;

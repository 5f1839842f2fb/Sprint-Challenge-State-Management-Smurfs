import React, { useContext } from 'react'
import { SmurfContext } from './App'

const Smurfs = () => {
  const smurfList = useContext(SmurfContext)
  
  return (
    <div>
      {smurfList ? smurfList.map(element => {
        return <h1>{element.name}</h1>
      }): null}
    </div>
  )
}

export default Smurfs
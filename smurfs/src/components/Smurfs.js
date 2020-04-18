import React, { useContext, useState } from 'react'
import { SmurfContext } from './App'

const Smurfs = () => {
  const { smurfList, addSmurf } = useContext(SmurfContext)
  const [name, setName] = useState('')
  const [age, setAge] = useState('')
  const [height, setHeight] = useState('')
  
  const submit = event => {
    event.preventDefault()
    addSmurf(name, age, height)
  }
  const handleName = event => {
    setName(event.target.value)
  }
  const handleAge = event => {
    setAge(event.target.value)
  }
  const handleHeight = event => {
    setHeight(event.target.value)
  }

  return (
    <div>
      {smurfList ? smurfList.map(element => {
        return <h1 key={Math.random()}>{element.name}</h1>
      }): null}
      <form onSubmit={submit}>
        <input placeholder={'Name:'} onChange={handleName}/>
        <input placeholder={'Age:'} onChange={handleAge}/>
        <input placeholder={'Height:'} onChange={handleHeight}/>
        <button type={'submit'}>Submit</button>
      </form>
    </div>
  )
}

export default Smurfs
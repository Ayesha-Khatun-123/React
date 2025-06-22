import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  //let counter=5  
  //hook
  //withput diya korle or let counter use korle only 
  //console a chane ho66a main page a kono update nai...but
  //hook use korle oi variable ta j khane a6a sob jaigata tei change hoya jabe

  let [counter,setCounter]=useState(0)

  const addValue =() =>{
    
   // counter=counter+1
   //setCounter(counter)
   if(counter<20)
    setCounter(counter+1)
    //console.log("value Added",counter)
  }


  const  removeValue =()=>{
    if(counter>0)
    setCounter(counter-1)
  }
  
  
  return (
    <>
    <h1>Chai Aur React</h1>

    <h2> Counter value:{counter}</h2>

    <button onClick={addValue}> Add Value{counter}</button>
    <br/>
  
    <button onClick={removeValue}> Decrese Value{counter} </button>
    </>
  )
}

export default App

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

   //if(counter<20)
   // setCounter(counter+1)// jokhon akhan a dekh66a same kaj ho66a tokhon bunch kora result pathai
   // setCounter(counter+1) //sob gulo ekbar e dekha final result 1 debe
   // setCounter(counter+1)
   // setCounter(counter+1)
    //console.log("value Added",counter)

  // This won’t give you 4 — it will just give 1. Because counter is the same (old) value in all the calls — React batches them and uses the same snapshot value.
    setCounter(counter => counter+1) // akhane prev value function ni66a value ni66a add kor6a but akhane intter funnction
    setCounter(counter => counter+1) //er kaj dekhiya bunch value ta di66a 4
    setCounter(counter => counter+1)
    setCounter(counter => counter+1)
 
    //This will give you 4, because each update gets the latest value from the previous update.
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

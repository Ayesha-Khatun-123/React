import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from'./Components/Card'

function App() {
  const [count, setCount] = useState(0)
  let myObj={
    name:"Ayesha",
    age:21
  }
let newArr=[1,2,3]
  return (
    <>
      
      <Card userName= "chai aur code" someObject= {myObj} someObject1= {newArr} />
       <Card userName= "chai aur mai"/>
      
    </>
  )
}

export default App

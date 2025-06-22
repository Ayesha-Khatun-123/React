import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import  React from 'react'
import App from './App.jsx'

function MyApp(){
  return(
    <div>
      <h1> Custom App!!</h1>
    </div>
  )
}
//nijer moto baniya6i
const ReactElement={
       type:'a',
       props:{
        href:'https://google.com',
        target:'_blank'
       },
       children: 'Click me to visit google'

 }
 


const anotherElement=(
  <a href="https://google.com" target='_blank'>Visit Google</a>
)
//reaact er mote bana66i...
// first parametr--------tag
// Second parameter------object
const username= "chai aur react"

 const reactElement =React.createElement(
    'a',
    {href:'https://google.com',target:'_blank'},
    'click me to visit google',
    username
 )
  

createRoot(document.getElementById('root')).render(
  
   reactElement
)

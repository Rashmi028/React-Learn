import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

function Element(){
  return(
  
    <h1>have a goodnight!</h1>
    
  )
}
// const ReactElement={
//   type:'a',
//   props:{
//       href:'https://google.com',
//       target:'_blank'
//   },
//   children:'Click me to visit google'
// }

const anotherElement = (
  <a href="http://google.com" target='_blank'>Visit 
  google</a>
)

const anotherUser="chai aur react";
const reactElement= React.createElement(
  'a',
  {href:'http://google.com',target:'_blank'},
  'click me to visit google',
  anotherElement
)
ReactDOM.createRoot(document.getElementById('root')).render(

   
reactElement
)

import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Alsfi from './alsfi.jsx'
 
 const anotherElement=(
  <a href="https://google.com" target='_blank'>Visit Google</a>
 )
 const anotherUser='cai or code';

 const reactDom=React.createElement(
   'a',
   {href:'https://google.com',target:'_blank'},
   'click me to visit google',
   anotherUser
 )



ReactDOM.createRoot(document.getElementById('root')).render(
  
   reactDom
    

)


import { useState } from 'react'
import './App.css'
import { useEffect } from 'react'
import { EVENTS } from './assets/const'

import HomePage from './pages/Home'

import AboutPage from './pages/About'



function App() {
 
const [currentPath,setCurrentPath]=useState(window.location.pathname)

useEffect(()=>{
const onLocationChange=()=>{
  setCurrentPath(window.location.pathname) //cambiamos el setState cuando se realice el evento
}
window.addEventListener(EVENTS.PUSHSTATE,onLocationChange) //escuchamos el evento que hemos creado 

window.addEventListener(EVENTS.POPSTATE,onLocationChange)//popstate es el evento de cuando damos hacia atras en la pagina

return ()=>{
  window.removeEventListener(EVENTS.PUSHSTATE,onLocationChange) //importante desuscribirte del evento 
  window.removeEventListener(EVENTS.POPSTATE,onLocationChange)
}
},[])



  return (
    <>
      <h1>Router</h1>
    <main>
      {currentPath==='/' &&<HomePage/>}
     
     {currentPath==='/about' && <AboutPage/>}
    </main>
    
    </>
  
  )
}

export default App

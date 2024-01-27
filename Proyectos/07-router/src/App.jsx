
import { useState } from 'react'
import './App.css'
import { useEffect } from 'react'
import { EVENTS } from './assets/const'





function navigate(href){
  window.history.pushState({},'',href)

  // creamos evento personalizado para avisar de que cambiamos url 

  const navigationEvent= new Event(EVENTS.PUSHSTATE)
  window.dispatchEvent(navigationEvent)
}



function HomePage(){
  return(
    <>
    <p>Esta es una pagina de ejemplo para crear un react router</p>
    <a href='/about'>  Ir a Sobre Nosotros </a>
    </>
  )
}


function AboutPage(){
  return (
    <>
    <h1> About</h1>
    <p> Hola esto es un clon de react router </p>
    <a href='/'>Ir  a Home </a>
    </>
  )
}







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

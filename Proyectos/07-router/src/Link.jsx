import { EVENTS } from "./assets/const"
export default function navigate(href){
    window.history.pushState({},'',href)
  
    // creamos evento personalizado para avisar de que cambiamos url 
  
    const navigationEvent= new Event(EVENTS.PUSHSTATE)
    window.dispatchEvent(navigationEvent)
  }
  
import { EVENTS } from "./assets/const"
 export function navigate(href){
    window.history.pushState({},'',href)
  
    // creamos evento personalizado para avisar de que cambiamos url 
  
    const navigationEvent= new Event(EVENTS.PUSHSTATE)
    window.dispatchEvent(navigationEvent)
  }
  
// eslint-disable-next-line react/prop-types
export function Link ({target, to,...props}){

  const handleClick =(event)=>{
    
    /**
     *  Al hacer click si no es un evento modificado, si es el mainEvent o si el target es si mismo 
     * evitaremos el comportamiento por defecto para navegar  en SPA, y si no que haga el evento que tenga que hacer con la tecla pulsada
     */
    const isMainEvent=event.button===0 //boton principal
    const isModifiedEvent=event.metaKey||event.altKey||event.ctrlKey||event.shiftKey
    const isManageableEvent=target===undefined||target==='_self'

    if(isMainEvent&&isManageableEvent&&!isModifiedEvent){
      event.preventDefault() //para que no haga el comportamiento por defecto del elemento a que seria hacer la navegacion completa 
      navigate(to)
      
    }
  }

  return <a onClick={handleClick} href={to} target={target} {...props}/> //Sale el texto de dentro del link porque al pasar todas las props tambien estas pasandole la prop children que es la que seria el texto
}
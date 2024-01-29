/* eslint-disable react/prop-types */

import { EVENTS } from "./assets/const"
import { Children, useEffect,useState } from "react"
import { match } from "path-to-regexp"
export function Router({children,routes=[],defaultComponent:DefaultComponent =()=>null }){
 
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
  /**
   * //Busca si alguna de las rutas del array routes es igual a la ruta del estado 
   * Si no lo es devuelve el componente por defecto que en este caso es null 
   */
    let routeParams= {}


    const routesFromChildren= Children.map(children,({props, type}) =>{
     
      const {name}= type
      const isRoute=name==='Route'


      if(!isRoute) return null
      return props
    })

     const routesToUse = routes.concat(routesFromChildren)
    const Page=routesToUse.find(({path})=>{
        if (path===currentPath) return true
        
     const matcherUrl =  match(path,{decode: decodeURIComponent})
     const matched = matcherUrl(currentPath)
     if(!matched)return false
     
     routeParams=matched.params
     return true
    })?.Component
    return Page? <Page routeParams={routeParams}/>
     : <DefaultComponent routeParams={routeParams}/>
    
  
  }
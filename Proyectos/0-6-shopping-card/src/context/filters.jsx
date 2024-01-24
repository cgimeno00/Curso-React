/* eslint-disable react/prop-types */
import { createContext,useState  } from "react";
/* Creamos el contexto para poder usar los filtros desde cualquier componente sin tener que pasarlo
de componente en componente
El contexto sirve para inyectar dependencias pudiendonos saltar las props de los componentes */

export const FiltersContext = createContext () 

/* Creamos el provider del contexto para proveer el contexto */ 

export function FiltersProvider ({children}){
    const[filters ,setFilters]=useState(
        {
            category:'all',
            minPrice:0
        }
    )
    return (
        <FiltersContext.Provider value={{ //esto es lo que queremos que nos devuelva el contexto cuando leemos el valor 
           filters,
           setFilters
        }}>
            {children}  
        </FiltersContext.Provider> //{children} es donde se va a poder usar el contexto envolviendo el componente
    )
}
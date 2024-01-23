/* eslint-disable react/prop-types */
import { createContext  } from "react";
/* Creamos el contexto para poder usar los filtros desde cualquier componente sin tener que pasarlo
de componente en componente */

export const FiltersContext = createContext () 

/* Creamos el provider del contexto para proveer el contexto */ 

export function FiltersProvider ({children}){
    return (
        <FiltersContext.Provider value={{
            category:'all',
            minPrice:0
        }}>
            {children}
        </FiltersContext.Provider>
    )
}
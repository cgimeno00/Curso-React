import { useContext } from "react";
import { CartContext } from "../context/cart";

export const useCart =() =>{
    const context = useContext(CartContext)
    if(context===undefined){ //Buena practica esto quiere decir que si es undefined es porque la parte donde laestamos usando no esta envuelta por el provider 
        throw new Error('useCart must be used within a Cart Provider ')
    }
    return context
}


// Creamos un hook para poder ver el contexto
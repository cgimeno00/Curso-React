/* eslint-disable no-undef */
/* eslint-disable react/prop-types */
import { createContext,useState } from "react"; //importamos contexto 

export const CartContext = createContext  () //Creamos el contexto

export function CartProvider({children}){
    const [cart,setCart]=useState([])

    const addToCart = product => {
        /*Como añadir a un carrito */
    // 1 --> Comprobar si hay algo en el carrito 

    const productInCartIndex=cart.findIndex(item=> item.id===product.id)


    if(productInCartIndex>=0){
        const newCart=structuredClone(cart)
        newCart[productInCartIndex].quantity +=1
      return  setCart(newCart)
    }


    // 2 --> Si el producto no esta en el carrito
// Recuperamos el Estado previo y ademas añadimos el producto 
        setCart(prevState => ([

            ...prevState,
            {
                ...product,
                quantity : 1
            }
        ]))
    



    }

    
    const removeFromCart = product => {
        setCart(prevState=>prevState.filter(item=>item.id!==product.id))
     
    }
    const clearCart = ()=>{
        setCart([])
    }


    return (

        <CartContext.Provider value={{
            cart,
            addToCart,
            clearCart,
            removeFromCart
        }

            
        }>
            {children}
        </CartContext.Provider>


    )



}



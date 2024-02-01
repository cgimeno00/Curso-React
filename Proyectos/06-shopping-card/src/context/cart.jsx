/* eslint-disable no-undef */
/* eslint-disable react/prop-types */
import { createContext,useReducer,useState } from "react"; //importamos contexto 

export const CartContext = createContext  () //Creamos el contexto
const initialState=[]
const reducer=(state,action)=>{
    const {type:actionType, payload:actionPayload}=action
    switch(action.type){    
        case'ADD_TO_CART':{
            const{id}=actionPayload
            const productInCartIndex=state.findIndex(item=>item.id===action.payload.id)

            if(productInCartIndex>=0){
                const newState=structuredClone(state)
                newState[productInCartIndex].quantity +=1
              return  newState
            }
            return[
                ...state,
                {
                    ...actionPayload,
                    quantity:1
                }
            ]
        }

        case 'REMOVE_FROM_CART':{
            const {id}=actionPayload
            return state.filter(item=>item.id!==id)

        }
        case 'CLEAR_CART':{
            return initialState 
        }
    }
    return state
}
export function CartProvider({children}){
    //const [cart,setCart]=useState([])

//     const addToCart = product => {
//         /*Como añadir a un carrito */
//     // 1 --> Comprobar si hay algo en el carrito 

//     const productInCartIndex=cart.findIndex(item=> item.id===product.id)


//     if(productInCartIndex>=0){
//         const newCart=structuredClone(cart)
//         newCart[productInCartIndex].quantity +=1
//       return  setCart(newCart)
//     }


//     // 2 --> Si el producto no esta en el carrito
// // Recuperamos el Estado previo y ademas añadimos el producto 
//         setCart(prevState => ([

//             ...prevState,
//             {
//                 ...product,
//                 quantity : 1
//             }
//         ]))
    



//     }

    
//     const removeFromCart = product => {
//         setCart(prevState=>prevState.filter(item=>item.id!==product.id))
     
//     }
//     const clearCart = ()=>{
//         setCart([])
//     }

const [state,dispatch] = useReducer(reducer,initialState)


const addToCart=product => dispatch({
    type: 'ADD_TO_CART',
    payload: product
})

const removeFromCart=product => dispatch({
    type: 'REMOVE_FROM_CART',
    payload: product
})

const clearCart=()=>dispatch({
type:'CLEAR_CART'
})
    return (

        <CartContext.Provider value={{
            cart:state,
            addToCart,
            clearCart,
            removeFromCart
        }

            
        }>
            {children}
        </CartContext.Provider>


    )



}



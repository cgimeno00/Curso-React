/* eslint-disable react/prop-types */
import { useId } from "react";
import { ClearCartIcon,  CartIcon } from "./Icons.jsx";
import './Cart.css'
import { useCart } from "../hooks/useCart.js";
export function Cart() {
    const cartCheckBoxId = useId()

    function CartItem({thumbnail,price,title,quantity,addToCart}){
        return(
            <li>
            <img src={thumbnail}
            alt={title}
            />
            <div>
                <strong>{title}</strong> - {price}
            </div>
            <footer>
                <small>
                    Qty: {quantity}
                </small>
                <button onClick={addToCart}>+</button>
            </footer>
        </li>
        )
      
    }
    const{cart,clearCart,addToCart}=useCart()
    return (
        <>
            <label className="cart-button" htmlFor={cartCheckBoxId}>
                <CartIcon />
            </label>
            <input id={cartCheckBoxId} type='checkbox' hidden />
            <aside className="cart">
                <ul>
                {cart.map(product=>(
                    <CartItem
                    key={product.id}
                    addToCart={()=>addToCart(product)}
                    {...product}/>

                ))}
                </ul>
                <button onClick={clearCart}><ClearCartIcon/></button>
            </aside>
        </>

    )
}
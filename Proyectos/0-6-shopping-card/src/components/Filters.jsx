import './Filters.css'
import { useState, useId } from 'react'
// eslint-disable-next-line react/prop-types
export function Filters ({onChange}){
    const [minPrice,setMinPrice]=useState(0)// Debemos poner un estado para poder mostrar el valor del rango ya que si no no se ve nada solo la barra
   
    /*
    //usamos useId para que nos de una id Unica que podamos usar en los inputs
    Funciona por el orden de llamada de componentes, NO FUNCIONA PARA MAPS
    */ 
    const minPriceFilterId=useId()
    const categoryFilterId=useId() 
                                                
    const handleChangeMinPrice=(event)=>{
        //Esto esta mal 
        setMinPrice(event.target.value)
        onChange(prevState => ({ //coge el estado anterior y 
            ...prevState, //el nuevo estado es el estado previo con el cambio en el minPrice
            minPrice:event.target.value
        }))
    }
   
    const handleChangeCategory=(event)=>{
        //Es un error pasarle la funcion de actualizar estado nativa a un componente hijo
        
        onChange(prevState => ({ //coge el estado anterior y 
            ...prevState, //el nuevo estado es el estado previo con el cambio en el minPrice
           category:event.target.value 
        }))
    }
    return (
        <section className='filters'>
            <div>
                <label htmlFor="price">Price </label>
                <input 
                type="range"
               // id='price' Esta id no valdria ya que podria estar en otro lado por lo que usaremos useId() que nos dara un id unico 
               id = {minPriceFilterId} 
               min='0'
                max='1000'
                step='10'
                onChange={handleChangeMinPrice}
                />
                <span>${minPrice}</span>
            </div>

            <div>
                <label htmlFor={categoryFilterId}>Categoria</label>
                <select id={categoryFilterId} onChange={handleChangeCategory}>
                    <option value="all">Todas</option>
                    <option value="laptops">Portatiles</option>
                    <option value= "smartphones">SmartPhones</option>
                </select>
            </div>
        </section>
    )
}
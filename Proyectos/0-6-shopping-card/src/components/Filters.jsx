import { useFilters } from '../hooks/useFilters'
import './Filters.css'
import {  useId } from 'react'
// eslint-disable-next-line react/prop-types
export function Filters (){
   
    const {filters,setFilters}=useFilters()
    /*
    //usamos useId para que nos de una id Unica que podamos usar en los inputs
    Funciona por el orden de llamada de componentes, NO FUNCIONA PARA MAPS
    */ 
    const minPriceFilterId=useId()
    const categoryFilterId=useId() 
                                                
    const handleChangeMinPrice=(event)=>{
        //Esto esta mal 
       
        setFilters(prevState => ({ //coge el estado anterior y 
            ...prevState, //el nuevo estado es el estado previo con el cambio en el minPrice
            minPrice:event.target.value
        }))
    }
   
    const handleChangeCategory=(event)=>{
        //Es un error pasarle la funcion de actualizar estado nativa a un componente hijo
        
       setFilters(prevState => ({ //coge el estado anterior y 
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
                value={filters.minPrice}
                />
                <span>${filters.minPrice}</span>
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
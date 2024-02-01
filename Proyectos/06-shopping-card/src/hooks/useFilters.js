import { useContext } from "react"
import { FiltersContext } from "../context/filters"

export function useFilters() {
    //const [filters, setFilters] = useState({
      //category: 'all',
      //minPrice: 0
    //})
  
    const {filters,setFilters}=useContext (FiltersContext) //Cogemoslos datos de los filtros del contexto
    
    
    
    const filterProducts = (products) => {
      return products.filter(product => {
        return ( //filtra el array y devuelve los objetos que los precios sean mayor o igual al filtro de precio y que sea de todas las categorias o de la categoria marcada
          product.price >= filters.minPrice && (filters.category === 'all' || product.category === filters.category)
        )
      })
    }
    return { filters,filterProducts, setFilters }
  }
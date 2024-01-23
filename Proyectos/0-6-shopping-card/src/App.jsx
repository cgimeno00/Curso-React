import { Products } from "./components/Products.jsx"
import { useContext, useState } from "react"
import { products as initialProducts } from './mocks/products.json'
import { Header } from "./components/Header.jsx"
import { Footer } from "./components/Footer.jsx"
import { FiltersContext } from "./context/filters.jsx"

function useFilters() {
  //const [filters, setFilters] = useState({
    //category: 'all',
    //minPrice: 0
  //})

  const filters=useContext (FiltersContext) //Cogemoslos datos de los filtros del contexto
  
  
  
  const filterProducts = (products) => {
    return products.filter(product => {
      return ( //filtra el array y devuelve los objetos que los precios sean mayor o igual al filtro de precio y que sea de todas las categorias o de la categoria marcada
        product.price >= filters.minPrice && (filters.category === 'all' || product.category === filters.category)
      )
    })
  }
  return { filterProducts, setFilters }
}

function App() {

  const [products] = useState(initialProducts)

  const { filterProducts, setFilters } = useFilters() //te devuelve la funcion filter Products y la funcion setFilters del estado

  const filteredProducts = filterProducts(products)
  return (
    <>
      <Header changeFilters={setFilters} />
      <Products products={filteredProducts} />
      <Footer/>
    </>

  )
}

export default App

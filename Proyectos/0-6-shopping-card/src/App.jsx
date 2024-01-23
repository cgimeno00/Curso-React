import { Products } from "./components/Products.jsx"
import { useState } from "react"
import { products as initialProducts } from './mocks/products.json'
import { Header } from "./components/Header.jsx"
function App() {

  const [products] = useState(initialProducts)
  const [filters, setFilters] = useState({
    category: 'all',
    minPrice: 0
  })


  const filterProducts = (products) => {
    return products.filter(product => {
      return ( //filtra el array y devuelve los objetos que los precios sean mayor o igual al filtro de precio y que sea de todas las categorias o de la categoria marcada
        product.price >= filters.minPrice && (filters.category === 'all' || product.category === filters.category)
      )
    })
  }

  const filteredProducts = filterProducts(products)
  return (
    <>
      <Header changeFilters={setFilters}/>
      <Products products={filteredProducts} />
    </>
   
  )
}

export default App

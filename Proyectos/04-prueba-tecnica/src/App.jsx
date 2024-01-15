/* eslint-disable no-trailing-spaces */
import { useState, useEffect } from 'react'

//  Asegurarse de que el endpoint de la API es el que nos devuelve lo que queremos

const CAT_ENDPOINT_RANDOM_FACT = 'https://catfact.ninja/fact'
// const CAT_ENDPOINT_IMAGE_URL = `https://cataas.com/cat/says/${firstWord}?size=50&color=red&json=true`
export function App () {
//  Utilizamos un estado para el hecho que recuperaremos de la app
  const [fact, setFact] = useState('lorem ipsum cat fact')
  
  /* Hacemos un fetching
    de datos (recuperar los datos de una API)con un useEffect con el
    array de dependecias vacio para que se realice solo al montarse el componente
    una vez realizado el fetch devuelve una promesa
    --> .then() 
  */
  // eslint-disable-next-line no-undef
  useEffect(() => {
    fetch(CAT_ENDPOINT_RANDOM_FACT)
      .then(res => res.json())
      .then(data => setFact(data.fact))
  }, [])
  return (
    <main>
      <h1>App de gatitos</h1>
      <p>{fact}</p>
    </main>
  )
}

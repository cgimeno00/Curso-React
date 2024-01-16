/* eslint-disable no-trailing-spaces */
import './App.css'
import { useCatImage } from './hooks/useCatImages.js'
import { useCatFact } from './hooks/useCatFact.js'
//  Asegurarse de que el endpoint de la API es el que nos devuelve lo que queremos

const CAT_PREFIX = 'https://cataas.com'
// CREAR CUSTOM HOOK IMPORTANTE <----

// const CAT_ENDPOINT_IMAGE_URL = `https://cataas.com/cat/says/${firstWord}?size=50&color=red&json=true`

export function App () {
  // Recuperamos el fact y la funcion para poder pasarselo al hook de la imagen y para poder usar la funcion
  const { fact, refreshFact } = useCatFact()
  /* Buena practica pasar el parametro como objeto
  Hemos hecho un custom HOOK y toda lo logica se realiza en esa funcion
  Los custom hooks no deben tener nombres de lo que haga el codigo 
  ya que no tienen en cuenta la implementacion
  */
  const { imageURL } = useCatImage({ fact })
  // eslint-disable-next-line no-unused-vars
  // eslint-disable-next-line no-undef
  /* Es mejor usar dos efectos por eso separarlos 
     Para que solo tenga una responsabilidad el efecto
  */
  const handleClick = async () => {
    refreshFact()
  }
  return (
    <main>
      <h1>App de gatitos</h1>
      <section>
        <button onClick={handleClick}> Get New Fact</button>
        {fact && <p>{fact}</p>}{/*  Esto es un renderizado condicional, solo se renderiza si hay "fact"  */}
        <img src={`${CAT_PREFIX}${imageURL}`} alt={`Image extracted using the first word for ${fact}`} />

      </section>
    </main>
  )
}

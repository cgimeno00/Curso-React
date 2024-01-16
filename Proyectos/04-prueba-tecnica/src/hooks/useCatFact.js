import { useState, useEffect } from 'react'
import { getRandomFact } from '../services/facts'
export function useCatFact () {
  //  Utilizamos un estado para el hecho que recuperaremos de la app
  const [fact, setFact] = useState()

  const refreshFact = () => {
    getRandomFact().then(newFact => setFact(newFact))
  }
  /* Para recuperar la cita al cargar la pagina
  se llama a la función getRandomFact() que devuelve una promesa.
  La función getRandomFact realiza una operación asincrona,
  Luego, cuando esa promesa se resuelve,
  el resultado se pasa a la función setFact.
      useEffect(() => {
      getRandomFact().then(setFact)
    }, [])
  */
  // Para recuperar la cita al cargar la pagina
  useEffect(refreshFact, [])

  // devolvemos el fact y la funcion para poder usarla desde el boton del html con el handleCLick
  return { fact, refreshFact }
}

import { useEffect, useState } from 'react'
// Para recuperar la imagen
export function useCatImage ({ fact }) {
  // El estado esta interno para que no se pueda cambiar desde fuera
  const [imageURL, setImageURL] = useState()

  // Para recuperar la imagen cada vez que cambie la cita
  useEffect(() => {
    // Controlamos que fact no sea null
    if (!fact) return
    /*
    -->Split separa la cadena de texto
     por el caracter que le pongas y
     te devuelve un array en este caso accedemos a la
     posicion 0 ya que nos habra separado todas las palabras
     y la posicion 0 corresponde a la primera
    --> Si pidiesen que obtuviesemos mas de una palabra seria
    con el metodo slice() y luego unirlas con join()
    const firstWord = fact.split(' ')[0].slice(0,3).join(' ')
    --> Se puede hacer tambien pasandole un 2 parametro a split:
    const firstWord = fact.split(' ',3)[0]
               */
    const firstWord = fact.split(' ')[0]
    fetch(`https://cataas.com/cat/says/${firstWord}?size=50&color=red&json=true`)
      .then(res => res.json())
      .then(response => {
        // Debemos guardar esta url en un estado para poderla usar

        const url = `/cat/says/${firstWord}?size=50&color=red`

        /*
        --> Hay que añadir el prefijo de la url de la imagen
        pero no se debe hacer en el estado ya que se debe hacer
        setsStates lo menos posible, lo mejor seria sacarlo en una constante
        const PREF_URL = 'https://....'
        */
        setImageURL(url)
        //  #endregion
      })
  }, [fact])
  return { imageURL }
}

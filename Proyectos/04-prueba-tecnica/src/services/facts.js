const CAT_ENDPOINT_RANDOM_FACT = 'https://catfact.ninja/fact'
/*
  --> Hacemos un fetching
    de datos (recuperar los datos de una API)con un useEffect con el
    array de dependecias vacio para que se realice solo al montarse el componente
    una vez realizado el fetch devuelve una promesa
    --> .then()

  -->Si queremos hacer el fetching con async await habria que hacerlo asi:
  useEffect(()=>{
    async function getRandomFact(){
      const res = await fetch(CAT_ENDPOINT_RANDOM_FACT)
      const json = await res.json()
      setFact(json.fact)
    }
  })
  */
export const getRandomFact = () => {
  return fetch(CAT_ENDPOINT_RANDOM_FACT) //  Realizamos el fetch
    .then(res => {
      // Manejamos el error por si da error la peticion
      /* if (!res.ok) {
        setFactError('No se ha podido recuperar la cita')
      } */
      return res.json()
    }) //  Transformamos la respuesta a json
    .then(data => { // Cogemos los datos del json
      const { fact } = data //  Usa destructuracion de objetos, se asume que data es un objeto que tiene la propiedad fact y se extrae
      // console.log(fact)
      // console.log(data)
      return fact
    })
}

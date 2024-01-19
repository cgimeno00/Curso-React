
import './App.css'

import { useCallback, useEffect, useRef, useState } from 'react' //sirve para guardar datos que persistan todo el ciclo de vida del componente y que aunque cambie no dispara un nuevo renderizado

import { Movies } from './components/movies.jsx'

import { useMovies } from './hooks/useMovies.js'

import debounce from 'just-debounce-it'


function useSearch (){
  const[search, updateSearch]= useState('')
  const [error,setError]=useState(null)

  const isFirstInput=useRef(true)
  useEffect(()=>{
    if(isFirstInput.current){
      isFirstInput.current= search===''
      return
    }
    if (search === '') {
      setError('No se puede buscar cadenas vacias')
      return
    }
    if(search.match(/^\d+$/)){
      setError('No se puede buscar una pelicula con un numero')
      return
    }
    if (search.length<3){
      setError('La busqueda debe ser de al menos 3 caracteres ')
      return
    }
    setError(null)
   },[search])

    return{search,updateSearch,error}

}

function App() {
  const debounceGetMoviies=useCallback(debounce(search=>{
    getMovies({search})
  },2000),[]) 
  const[sort,setSort]=useState(false)
  const{search, updateSearch, error}=useSearch()
  const{movies,getMovies,loading} = useMovies({search,sort})

  /*
  --> CON HOOK USEREF
    const inputRef = useRef ()
 
    const handleSubmit = (event) => {
    event.preventDefault() //para evitar el comportamiento por defecto
    const  inputEl =inputRef.current //recuperamos el elemento
    const value=inputEl.value //recuperamos el valor
   }
  */ 


 /* De forma nativa en js DE FORMA NO CONTROLADA  <--
 
    const handleSubmit = (event) => {
    event.preventDefault() //para evitar el comportamiento por defecto
      
     const  { query } = Object.fromEntries( new window.FormData(event.target))// para recuperar todos los campos de un formulario con js 
    // const fields=  Object.fromEntries( new window.FormData(event.target))// para recuperar todos los campos de un formulario con js 

     console.log(query)
   }*/


/*DE FORMA CONTROLADA Se usa eun estado de react es mas lento ya que cada vez que se cambia el estado se vuelve a renderizar <--
// Es mas comodo para las validaciones
const handleSubmit = (event) => {
  event.preventDefault() //para evitar el comportamiento por defecto
  
   console.log({query})
 }

   const handleChange=(event)=>{
    const newQuery=event.target.value //si no hacemos esto al ser el estado asincrono podria cogernos el anterior y no funcionar

    setQuery(newQuery)
    if (newQuery === '') {
      setError('No se puede buscar cadenas vacias')
      return
    }
    if(newQuery.match(/^\d+$/)){
      setError('No se puede buscar una pelicula con un numero')
      return
    }
    if (newQuery.length<3){
      setError('La busqueda debe ser de al menos 3 caracteres ')
      return
    }
    setError(null)
   }
*/
const handleSubmit = (event) => {
  event.preventDefault() //para evitar el comportamiento por defecto
    getMovies({search})
   
 }

   const handleChange=(event)=>{
    const newSearch=event.target.value 
    updateSearch(newSearch)
    debounceGetMoviies(newSearch)
   }
   
   const handleSort=()=>{
    setSort(!sort)
   }
  


  return (

    <div className='page'>
      <header>
        <h1>Buscador de peliculas</h1>
        <form className='form' onSubmit={handleSubmit}> {/* Le ponemos clase para estilarlo despues */}
          <label >
            Put movie to search
            <input onChange={handleChange} value={search} name='query' placeholder='Avengers, Star Wars...' />
            <input type='checkbox' onChange={handleSort} checked={sort}/>
            <button  type='submit'>Buscar</button>
          </label>
        </form>
        {/* Renderizado condicional*/
        error && <p style={{color:'red'}}className='error'> {error} </p>
        }
      </header>

      <main>
        {loading ? <p> Cargando..</p> :  <Movies movies = { movies } /> }
    
      </main>


    </div>


  )
}

export default App

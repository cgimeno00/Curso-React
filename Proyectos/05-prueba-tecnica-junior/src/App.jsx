
import './App.css'

import { useRef } from 'react' //sirve para guardar datos que persistan todo el ciclo de vida del componente y que aunque cambie no dispara un nuevo renderizado

import { Movies } from './components/movies.jsx'

import { useMovies } from './hooks/useMovies.js'

function App() {

   const{movies : mappedMovies } = useMovies()

  /*
  --> CON HOOK USEREF
    const inputRef = useRef ()
 
    const handleSubmit = (event) => {
    event.preventDefault() //para evitar el comportamiento por defecto
    const  inputEl =inputRef.current //recuperamos el elemento
    const value=inputEl.value //recuperamos el valor
   }
  */ 


 // De forma nativa en js
 
   const handleSubmit = (event) => {
    event.preventDefault() //para evitar el comportamiento por defecto
    const fields =new FormData(event.target)
    const query= fields.get('query')
   }
  return (

    <div className='page'>
      <header>
        <h1>Buscador de peliculas</h1>
        <form className='form' onSubmit={handleSubmit}> {/* Le ponemos clase para estilarlo despues */}
          <label >
            Put movie to search
            <input name='query' placeholder='Avengers, Star Wars...' />
            <button  type='submit'>Buscar</button>
          </label>
        </form>
      </header>

      <main>
      <Movies movies = { mappedMovies } />
      </main>


    </div>


  )
}

export default App

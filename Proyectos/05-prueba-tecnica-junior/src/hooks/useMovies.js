
import { useState,useRef,useMemo,useCallback } from 'react'
import { searchMovies } from '../services/movies.js'

export function useMovies ({search,sort}){ 
   const[movies,setMovies]=useState([])
   const[loading,setLoading]=useState(false)
   const [error,setError]=useState(null)
   const previousSearch=useRef(search)//guardamos la busqueda para mas adelante 
   
  //useCallback es lo mismo que use Memo pero simplifica la sintaxis ya que no necesita que le pasemos un callback
    const getMovies = useCallback(async ({ search }) => {
      if (search === previousSearch.current) return; // si la busqueda es la misma que la que tiene guardada NO la hace
      try {
        setLoading(true);
        setError(null);
        previousSearch.current = search;
        const newMovies = await searchMovies({ search });
        setMovies(newMovies);
      } catch (e) {
        setError(e.message);
      } finally {
        setLoading(false);
      }
    }, []);
    const sortedMovies = useMemo(()=>{{/**Usamos use memo para no calcular todo el rato las peliculas ordenadas ya que si no se renderizarian todo el rato  */}
      console.log('memoSorted')
     return sort ? [...movies].sort((a,b)=>a.title.localeCompare(b.title))
      :movies//locale compare compara de forma local con acentos 
    },[sort,movies])
    
 
    return {movies:sortedMovies,getMovies,loading}
  }
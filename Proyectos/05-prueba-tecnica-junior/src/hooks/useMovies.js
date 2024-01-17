

import responseMovies from '../mocks/results.json'
export function useMovies (){ 
    const movies=responseMovies.Search
    //Hay que realizar esto para que no dependamos del contrato de la API
    const mappedMovies=movies.map(movie =>({
      id: movie.imdbID,
      title: movie.Title,
      year: movie.Year,
      poster: movie.Poster
    }))
    return {movies : mappedMovies}
  }
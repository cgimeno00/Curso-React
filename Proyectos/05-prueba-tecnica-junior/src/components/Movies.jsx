/* eslint-disable react/prop-types */
// eslint-disable-next-line react/prop-types
 function  ListOfMovies({ movies }){
    return (
        <ul>
        {
          movies.map(movie =>(
            <li key={movie.id}>
            <h3>{movie.title}</h3>
            <p>{ movie.year}</p>
            <img src={movie.poster} alt={movie.Title}></img>
            </li>
    
          ))
        }
      </ul>
    )
  
}

 function NoMoviesResults(){
    return (
        <p>No se han encontrado resultados</p>
    )
}
export function Movies({movies}){
    
    const hasMovies=movies?.length>0
    return (
    

        hasMovies 
        ? <ListOfMovies movies={movies}/>
        : <NoMoviesResults/>

    
      
)
}
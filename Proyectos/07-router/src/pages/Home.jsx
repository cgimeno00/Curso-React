import{Link} from '../Link.jsx'
export default  function HomePage(){
  return(
    <>
    <p>Esta es una pagina de ejemplo para crear un react router</p>
   <Link to='/about'>Ir a sobre nosotros</Link>
    </>
  )
}
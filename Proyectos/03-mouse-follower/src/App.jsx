import { useEffect, useState } from "react"


const FollowMouse = () => {
  const [enabled, setEnabled] = useState(false)
  const [position, setPosition] = useState({ x: 0, y: 0 })
  //el primer parametro es el codigo que se va a ejecutar 
  //el 2 parametro es cuando se va a ejecutar, en este caso cuando cambie el estado enabled
  useEffect(() => {
    //funcion que recibe un evento  
    const handleMove = (event) => {
      const { clientX, clientY } = event
      setPosition({ x: clientX, y: clientY })
    }
    //por que si no esta activado no queremos que haga nada, NO SE PUEDEN METER HOOKS DENTRO DEL CONDICIONAL
    if (enabled) {
      window.addEventListener('pointermove', handleMove) //esto no se puede poner en el cuerpo por que se ejecutaria cada vez que hagamos un render
    }
    //limpiamos la suscripcion al evento por que si no sigue ejecutandose
    //esto pasara cuando se deje de renderizar el componente
    //o cuando cambie la dependencia en este caso "enabled"
    return () => {
      window.removeEventListener('pointermove', handleMove)
    }
  }, [enabled])                                         //controlamos cuando nos suscribimos a un evento con el useEffect


  return (
    <main>
      <div style={{
        position: "absolute",
        backgroundColor: '#09f',
        borderRadius: '50%',
        opacity: 0.8,
        pointerEvents: 'none',
        left: -20,
        top: -20,
        width: 40,
        height: 40,
        transform: `translate(${position.x}px,${position.y}px)`
      }}>
      </div>
      <button onClick={() => setEnabled(!enabled)}>{enabled ? 'Desactivar' : 'Activar'} seguir puntero</button>
    </main>
  )
}








function App() {
  return (
    <main>
      <FollowMouse />
    </main>
  )
}

export default App

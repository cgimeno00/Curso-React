
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import { useReducer } from 'react'
import {Action, type  State } from './types.d'





// Como hacer un reducer y useReducer
// 1 --> Crear Estado inicial

const initialState : State = {

  fromLanguage:'auto',
  toLanguage:'en',
  fromText:'',
  result:'',
  loading:false
}

// 2 --> Creare una funcion reducer  Recibe un estado y una accion

function reducer(state:State,action:Action){

  // Recuperamos la accion y el payload
  const {type} = action
  
  if(type==='INTERCHANGE_LANGUAGES'){
    return{
      ...state,
      fromLanguage:state.toLanguage,
      toLanguage:state.fromLanguage
    }
  }

  if(type==='SET_FROM_LANGUAGE'){
    return{
      ...state,
      fromLanguage:action.payload
    }
  }

  if(type==='SET_TO_LANGUAGE'){
    return{
      ...state,
      ToLanguage:action.payload
    }
  }

  if(type==='SET_FROM_TEXT'){
    return{
      ...state,
      loading:true,
      fromText:action.payload,
      result:''
    }
  }
  if(type==='SET_RESULT'){
    return{
      ...state,
      loading:false,
      result:action.payload
    }
  }
  return state
}


function App () {

  // 3 --> Usamos hook useReducer para recibir el estado 

  const[state, dispatch]=useReducer(reducer,initialState)
  return (
    <>
     <h1>Google Translate</h1>
    </>
  )
}

export default App

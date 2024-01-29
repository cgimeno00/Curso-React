/* eslint-disable react/prop-types */

import {Router} from './Router.jsx'

import HomePage from './pages/Home'
import { Suspense, lazy } from 'react'
//import AboutPage from './pages/About'
import Page404 from './pages/404.jsx'
import SearchPage from './Search.jsx'
import { Route } from './Route.jsx'



const LazyAboutPage=lazy (()=> import ('./pages/About.jsx'))

const routes =[ //creamos un array para extraer las rutas y el componente al que lleva cada una 

  {
    path:'/search/:query', //Rutas dinamicas para capturar el query y poder ir a una rota o a otra
    Component:SearchPage
  }
]



function App() {



  return (
    <>
      <h1>Router</h1>
    <main>
      <Suspense fallback={<div>Loading...</div>}>
      <Router routes={routes} defaultComponent={Page404}>
    <Route path= '/' Component={HomePage}></Route>
    <Route path= '/about' Component={LazyAboutPage}></Route>

   </Router>
      </Suspense>
   
    </main>
    
    </>
  
  )
}

export default App

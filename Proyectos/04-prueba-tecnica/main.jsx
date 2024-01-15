/*  Este es el primer archivo que se carga en el index.html
por lo que es el archivo que hay que modificar para realizar el punto
de entrada en una aplicación react
importamos createRoot creamos la constante y hacemos el render
hay que cambiar el main.js a .jsx para que el plugin que hemos instalado
sea capaz de transpilar el codigo.
*/

import { createRoot } from 'react-dom/client'
import { App } from './src/App.jsx'
//  Cogemos el id app que es donde queremos renderizar
const root = createRoot(document.getElementById('app'))
root.render(<App />)

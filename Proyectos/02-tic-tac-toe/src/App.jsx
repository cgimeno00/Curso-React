
import { useState } from 'react'
import './App.css'
import confetti from 'canvas-confetti'
import { Square } from './components/Square'
import { TURNS } from './constants'
import { checkWinnerFrom, checkEndGame } from './logic/board'
import { WinnerModal } from './components/WinnerModal'
export default App


function App() {

 
  const[winner,setWinner]=useState(null)

  const [board,setBoard] =useState(()=>{
    //recuperamos si hay el tablero del localStorage
    const boardFromStorage=window.localStorage.getItem('board')
    
    if(boardFromStorage) return JSON.parse(boardFromStorage)
    return Array(9).fill(null)  
  }
  )

  const [turn, setTurn]=useState(()=>{
    const turnFromStorage=window.localStorage.getItem('turn')
    return turnFromStorage ?? TURNS.X
  })


  
 

  //ponemos el estado del principio 
  const resetGame=()=>{
    setBoard(Array(9).fill(null))
    setTurn(TURNS.X)
    setWinner(null)
    window.localStorage.removeItem('board')
    window.localStorage.removeItem('turn')
  }


  const updateBoard=(index)=>{
   //si ya hay algo en esa posicion no hace lo siguiente por lo que no pinta nada
    //o si hay ganador 
   if (board[index]||winner) return
   //hay que hacer una copia porque el STATE no se modifica
    const newBoard=[...board]
    //pone en el cuadrado el dibujo del turno
    newBoard[index]=turn
    //actualiza el estado del tablero 
    setBoard(newBoard)
    //cambiamos el turno, si es igual a X pone una O y si no al contrario 
    const newTurn=turn===TURNS.X ? TURNS.O : TURNS.X
    setTurn(newTurn)
    //guardar partida en un JSON en localStorage
    window.localStorage.setItem('board',JSON.stringify(newBoard))
    window.localStorage.setItem('turn', newTurn)

    //revisamos si hay ganador
    const newWinner=checkWinnerFrom(newBoard)
    if(newWinner){
      //confeti cuando gana instalado en una dependencia 
      confetti()
      setWinner(newWinner)//la actualizacion de los estados es ASINCRONA
                          //no bloquea el codigo que viene después
    }
    //le pasamos el tablero para ver si hay posiciones libres, si no las hay no hay ganador por lo que sera un empate
    else if(checkEndGame(newBoard)){
      setWinner(false)
    }
  }
  
  return (
    <main className='board'>
      <h1>Tic tac toe</h1>
      <button onClick={resetGame}> Reset Game</button>
      <section className='game'>
        {
          board.map((square, index) => {
            return (
              <Square
                key={index} //Esto me esta devolviendo un array de elementos Square
                index={index} //con los valores del indice del array original 
               updateBoard={updateBoard}//le pasamos la funcion, no la ejecucion
               >  
                  {square}
              </Square>
            )
          }) 

          


        }
      </section>
      <section className='turn'>
        <Square isSelected={turn===TURNS.X}>
          {TURNS.X}
          </Square>
        <Square  isSelected={turn===TURNS.O}>
          {TURNS.O}
          </Square>
      </section>
    <WinnerModal resetGame={resetGame} winner={winner}/>
    </main>

  )
}



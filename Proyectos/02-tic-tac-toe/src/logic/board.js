import { WINNER_COMBOS } from "../constants"
 export const checkWinnerFrom=(boardToCheck)=>{
    //revisamos todas las combinaciones para ver quien gana
    for(const combo of WINNER_COMBOS){
      const [a,b,c]=combo
      if(
        boardToCheck[a]&&
        boardToCheck[a]===boardToCheck[b]&&
        boardToCheck[c]===boardToCheck[b]
      ){
        return boardToCheck[a]
      }
    }
    //si no hay ganador
    return null
  }

    
  export const checkEndGame=(newBoard)=>{
    //revisamos si no hay espacios vacios en el tablero
    return newBoard.every((square)=>square !==null)
  }
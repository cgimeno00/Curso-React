import { Square } from "./Square"
//exportamos la funcion para mostrar ganador 

import PropTypes from "prop-types";

 export function WinnerModal({winner,resetGame}) {
    //una seccion que cuando haya un ganador lo muestre
    if (winner === null) return null
    
    const winnerText=winner===false ? 'Empate' : 'Ganó:'
    return (
    
    
    <section className='winner'>
        <div className='text'>
            <h2>
                {winnerText}
            </h2>
            <header className='win'>

                { //muestra el ganador
                    <Square>{winner}</Square>
                }
            </header>
            <footer>
                <button onClick={resetGame}>Empezar de nuevo</button>
            </footer>
        </div>
    </section>
    )
}
WinnerModal.propTypes = {
    winner: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
    resetGame: PropTypes.func.isRequired,
  };

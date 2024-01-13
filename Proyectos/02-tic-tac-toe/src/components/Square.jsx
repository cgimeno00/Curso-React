/* eslint-disable react/prop-types */


// la exportamos para poder usar en la app 
export const Square = ({ children, isSelected, updateBoard, index }) => {
    const className = `square ${isSelected ? 'is-selected' : ''}`
  
    const handleClick = () => {
      updateBoard(index); //cuando el usuario hace click actualizamos el cuadrado en el que hace click
  
    }
    return (
      <div onClick={handleClick} className={className}>
        {children}
      </div>
    )
  }
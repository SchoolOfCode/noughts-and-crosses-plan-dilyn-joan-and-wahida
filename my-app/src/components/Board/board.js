import React from 'react'
import Square from '../Square/square'
import "./Board.css"



export default function Board({gameBoard,handleButton}) {
  return (
    <div  className = "board" >
      {gameBoard.map((square,index) => {
     <button onClick={()=> handleButton(index)}> {square.player} </button>
      // <Square key={index} value={square.player} handleButton={handleButton}/>
})}

    </div>
  )
}

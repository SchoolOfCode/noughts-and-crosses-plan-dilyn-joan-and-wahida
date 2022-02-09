import React from 'react'
import Square from '../Square/square'
import "./Board.css"



export default function Board({gameBoard,handleButton}) {
  return (
    <div  className = "board" >
      {gameBoard.map((square,index) => (
      <Square key={index} value={square} handleButton={handleButton} index={index}/>
      ))}

    </div>
  )
}

import React from 'react'
import Square from '../Square/square'
import "./Board.css"



export default function Board({handleButton, buttonText}) {
  return (
    <div  className = "BOARD" >
      <Square className = "TL" handleButton = {handleButton} buttonText={buttonText}/>
      <Square className = "TM" handleButton = {handleButton} buttonText={buttonText}/>
      <Square className = "TR" handleButton = {handleButton} buttonText={buttonText}/>
      <Square className = "ML" handleButton = {handleButton} buttonText={buttonText}/>
      <Square className = "MM" handleButton = {handleButton} buttonText={buttonText}/>
      <Square className = "MR" handleButton = {handleButton} buttonText={buttonText}/>
      <Square className = "BL" handleButton = {handleButton} buttonText={buttonText}/>
      <Square className = "BM" handleButton = {handleButton} buttonText={buttonText}/>
      <Square className = "BR" handleButton = {handleButton} buttonText={buttonText}/>

    </div>
  )
}

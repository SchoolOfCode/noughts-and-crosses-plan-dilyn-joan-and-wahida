import React from 'react'
import "./Square.css"

export default function Square({handleButton, buttonText}) {
  return (
    <div className = "square" >
    <button onClick = {handleButton}> {buttonText} </button>
    </div>
  )
}


// onClick={() => handleButton()} > {buttonText}
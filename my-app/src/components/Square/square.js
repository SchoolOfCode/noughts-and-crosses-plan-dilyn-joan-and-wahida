import React, {useState} from 'react'
import "./Square.css"

export default function Square({value, handleButton, index}) {
  return (
      <button onClick={()=> handleButton(index)}> {value} </button>
  )
}


import React, {useState} from 'react'
import "./Square.css"

export default function Square({value, handleButton, key}) {
  console.log(value)
  return (
      <button onClick={()=> handleButton(key)}> {value} </button>
  )
}

    


import React from 'react'
import Square from '../Square/square'
import "./Board.css"


export default function Board() {
  return (
    <div  className = "BOARD" >
      <Square className = "TL"/>
      <Square className = "TM"/>
      <Square className = "TR"/>
      <Square className = "ML"/>
      <Square className = "MM"/>
      <Square className = "MR"/>
      <Square className = "BL"/>
      <Square className = "BM"/>
      <Square className = "BR"/>

    </div>
  )
}

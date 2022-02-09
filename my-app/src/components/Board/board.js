import React from 'react'
import Square from '../Square/square'
import "./Board.css"



export default function Board({togglePlayer, player}) {
  return (
    <div  className = "BOARD" >
      <Square className = "TL" togglePlayer = {togglePlayer} player={player}/>
      <Square className = "TM" togglePlayer = {togglePlayer} player={player}/>
      <Square className = "TR" togglePlayer = {togglePlayer} player={player}/>
      <Square className = "ML" togglePlayer = {togglePlayer} player={player}/>
      <Square className = "MM" togglePlayer = {togglePlayer} player={player}/>
      <Square className = "MR" togglePlayer = {togglePlayer} player={player}/>
      <Square className = "BL" togglePlayer = {togglePlayer} player={player}/>
      <Square className = "BM" togglePlayer = {togglePlayer} player={player}/>
      <Square className = "BR" togglePlayer = {togglePlayer} player={player}/>

    </div>
  )
}

import './Game.css';
import Board from '../Board/board.js';
import { useState } from 'react';
import Player from '../Player/player';




function Game() {
  const [gameBoard, setGameBoard] = useState([null,null,null,null,null,null,null,null,null]);
  const [player, setPlayer] = useState('Player1');

  function togglePlayer(){
    if(player==="Player1") {
      setPlayer("Player2")
    } else {
    setPlayer("Player1")
    }}
    

  return (
    <div className="Game">
      Hello
      <Board togglePlayer = {togglePlayer} player = {player}/>
      <Player player={player}/>
    </div>
    
  );
}


export default Game;

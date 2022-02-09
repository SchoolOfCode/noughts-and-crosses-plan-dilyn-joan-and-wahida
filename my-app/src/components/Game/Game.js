import './Game.css';
import Board from '../Board/board.js';
import { useState } from 'react';
import findWinner from '../Winner/winner'
import Player from '../Player/player';




function Game() {
  const [gameBoard, setGameBoard] = useState([null,null,null,null,null,null,null,null,null]);
  const [isPlayer1, setIsPlayer1] = useState(true)
  const currentPlayer = isPlayer1 ? "X": "O";
  const winner = findWinner(gameBoard)

  function handleButton(index) {
    if(winner || gameBoard[index]) {
      return;
    }
    setGameBoard([
      ...gameBoard.slice(0,index), currentPlayer, ...gameBoard.slice(index+1)
    ]);
    setIsPlayer1(!isPlayer1)
    console.log(gameBoard)
  }


  return (
    <div className="Game">
      <Board gameBoard={gameBoard} handleButton={handleButton}/>
      <Player />
    </div>
    
  );
}


export default Game;

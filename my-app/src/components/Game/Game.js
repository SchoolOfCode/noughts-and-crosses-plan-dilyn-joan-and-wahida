import './Game.css';
import Board from '../Board/board.js';
import { useState } from 'react';




function Game() {
  const [gameBoard, setGameBoard] = useState([null,null,null,null,null,null,null,null,null]);

  const [buttonText, setButtonText] = useState("0")

  function handleButton(){
      setButtonText("X")
     console.log("button") 
  }
  return (
    <div className="Game">
      Hello
      <Board handleButton={handleButton} buttonText = {buttonText}  />
    </div>
    
  );
}

export default Game;

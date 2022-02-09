import React, {useState} from 'react'
import "./Square.css"

export default function Square({togglePlayer, player}) {
  const [buttonText, setButtonText] = useState(" . ")

  function handleButton(){
    togglePlayer();
    if(player === "Player1"){
      setButtonText("X");
    }else{
      setButtonText("O");
    }
      
     console.log("button") ;
     
  }
  return (
    <div className = "square" >
      <button onClick = {handleButton} > {buttonText} </button>
    </div>
  )
}

    


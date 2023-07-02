import './App.css'
import React, { useState } from 'react';
import { Board } from './components/Board';

function App() {
  //define the win conditions
  const WIN = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2,4,6]
   ]

  //create list as state instead of static list. The default value is an Array with 9 elements
  const [board, setBoard] = useState(Array(9).fill(null));

  //set the player
  const [xPlayer, setXPlayer] = useState(true)


  //function to handle when box is clicked 
  const handleBoxClick = (boxIndex) => {
    const updatedBoard = board.map((value, index) => {
      if (index === boxIndex) {
        return xPlayer === true ? "X" : "O";
      } else {
        return value;
      }
    })

    checkWinner(updatedBoard)
    //update board variable
    setBoard(updatedBoard);

    setXPlayer(!xPlayer);
  }

  //function to check the board for a win
  const checkWinner = (board) => {
    for (let i = 0; i < WIN.length; i++){
      const [x, y, z] = WIN[i];

      //check indices to see if the values present are the same 
      if (board[x] && board[x] === board[y] && board[y] === board[z]) {
        return board[x];
      }


    }
  }


  return (
    <div className="App">
      <Board board={board} onClick={handleBoxClick} />

    </div>
  );
}

export default App;

import './App.css'
import React, { useState } from 'react';
import { Board } from './components/Board';

function App() {
  //create list as state instead of static list. The default value is an Array with 9 elements
  const [board, setBoard] = useState(Array(9).fill(null));

  //function to handle when box is clicked 
  const handleBoxClick = (boxIndex) => {
    const updatedBoard = board.map((value, index) => {
      if (index === boxIndex) {
        return "X";
      } else {
        return value;
      }
    })

    //update board variable
    setBoard(updatedBoard);
  }

  return (
    <div className="App">
      <Board board={board} onClick={handleBoxClick} />

    </div>
  );
}

export default App;

import './App.css'
import { Board } from './components/Board';

function App() {
  //list of X's named 'board
  const board = ["X", "X", "X", "X", "X", "X", "X", "X", "X"]


  return (
    <div className="App">
      <Board board={board} onClick={null} />

    </div>
  );
}

export default App;

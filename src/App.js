import { useState } from 'react';

const X = "X", O = "O";

function Square({ letter, clickHandler }) {
  return <button className="square" onClick={clickHandler}>{letter}</button>;
}

function Board({ currentSquares, currentTurn, onPlay }) {
  const getNextPlayer = () => currentTurn ? X : O
  const winner = checkForWinner(currentSquares);
  let status = (winner != null)
    ? `Winner: ${winner}`
    : `Next player: ${getNextPlayer()}`

  function handleClick(squareIndex) {
    const isSelected = currentSquares[squareIndex] != null;
    const winner = checkForWinner(currentSquares);
    if (winner != null || isSelected) return
    const nextSquares = currentSquares.slice();
    const next = getNextPlayer();
    nextSquares[squareIndex] = next;
    onPlay(nextSquares);
  }

  return (
    <div>
      <div className="status">{status}</div>
      <div className="board-row">
        <Square letter={currentSquares[0]} clickHandler={() => handleClick(0)} />
        <Square letter={currentSquares[1]} clickHandler={() => handleClick(1)} />
        <Square letter={currentSquares[2]} clickHandler={() => handleClick(2)} />
      </div>
      <div className="board-row">
        <Square letter={currentSquares[3]} clickHandler={() => handleClick(3)} />
        <Square letter={currentSquares[4]} clickHandler={() => handleClick(4)} />
        <Square letter={currentSquares[5]} clickHandler={() => handleClick(5)} />
      </div>
      <div className="board-row">
        <Square letter={currentSquares[6]} clickHandler={() => handleClick(6)} />
        <Square letter={currentSquares[7]} clickHandler={() => handleClick(7)} />
        <Square letter={currentSquares[8]} clickHandler={() => handleClick(8)} />
      </div>
    </div>
  )
}
export default function Game() {
  const [isOddTurn, setNextTurn] = useState(true);
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const currentSquares = history[history.length - 1];

  const onPlayHandler = (updatedSquares) => {
    setHistory([...history, updatedSquares]);
    setNextTurn(!isOddTurn);
  }

  return (
    <div className="game">
      <div className="game-board">
        <Board currentSquares={currentSquares} currentTurn={isOddTurn} onPlay={onPlayHandler} />
      </div>
      <div className="game-info">
        <ol>{/*TODO*/}</ol>
      </div>
    </div>
  );
}

function checkForWinner(squares) {
  const winnerIndexes = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];

  for (let i = 0; i < winnerIndexes.length; i++) {
    const [a, b, c] = winnerIndexes[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }

  return null;
}

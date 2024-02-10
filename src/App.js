import { useState } from 'react';

const X = "X", O = "O";

export function Square({ letter, clickHandler }) {
  return <button className="square" onClick={clickHandler}>{letter}</button>;
}

export default function Board() {
  const [isOddTurn, setNextTurn] = useState(true);
  const getNextPlayer = () => isOddTurn ? X : O
  const [squares, setSquares] = useState(Array(9).fill(null));
  const winner = checkForWinner(squares);
  let status = (winner != null) 
              ? `Winner: ${winner}` 
              : `Next player: ${getNextPlayer()}`

  function handleClick(squareIndex) {
    const isSelected = squares[squareIndex] != null;
    if (checkForWinner(squares) || isSelected) return
    const nextSquares = squares.slice();
    const next = getNextPlayer();
    nextSquares[squareIndex] = next;
    setSquares(nextSquares);
    setNextTurn(!isOddTurn);
  }

  return (
    <div>
      <div className="status">{status}</div>
      <div className="board-row">
        <Square letter={squares[0]} clickHandler={() => handleClick(0)} />
        <Square letter={squares[1]} clickHandler={() => handleClick(1)} />
        <Square letter={squares[2]} clickHandler={() => handleClick(2)} />
      </div>
      <div className="board-row">
        <Square letter={squares[3]} clickHandler={() => handleClick(3)} />
        <Square letter={squares[4]} clickHandler={() => handleClick(4)} />
        <Square letter={squares[5]} clickHandler={() => handleClick(5)} />
      </div>
      <div className="board-row">
        <Square letter={squares[6]} clickHandler={() => handleClick(6)} />
        <Square letter={squares[7]} clickHandler={() => handleClick(7)} />
        <Square letter={squares[8]} clickHandler={() => handleClick(8)} />
      </div>
    </div>
  )
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

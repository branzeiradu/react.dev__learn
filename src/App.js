import { useState } from 'react';

const X = "X", O = "O";

export function Square({ letter, clickHandler }) {
  return <button className="square" onClick={clickHandler}>{letter}</button>;
}

export default function Board() {

  const [squares, setSquares] = useState(Array(9).fill(null));

  function handleClick(squareIndex) {
    const nextSquares = squares.slice();
    nextSquares[squareIndex] = X;
    setSquares(nextSquares);
  }

  return (
    <div>
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

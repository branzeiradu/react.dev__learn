import { useState } from 'react';

const X = "X", O = "O";

export function Square() {
  const [letter, setLetter] = useState(null);

  const clickHandler = function () {
    setLetter((letter == null) ? X : null);
  }
  
  return <button className="square" onClick={clickHandler}>{letter}</button>;
}

export default function Board() {
  return (
    <div>
      <div className="board-row">
        <Square />
        <Square />
        <Square />
      </div>
      <div className="board-row">
        <Square />
        <Square />
        <Square />
      </div>
      <div className="board-row">
        <Square />
        <Square />
        <Square />
      </div>
    </div>
  )
}

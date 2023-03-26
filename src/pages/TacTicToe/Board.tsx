import React, { useState } from 'react';
import Square from './Square';
import './styles/Board.sass';
export default function Board() {
  const [xIsNext, setXIsNext] = useState<boolean>(true);
  const [squares, setSquares] = useState<Array<any>>(Array(9).fill(null));

  function handleClick(i: number) {
    if (squares[i] || calculateWinner(squares)) return;
    const nextSquares = squares.slice();
    if (xIsNext) {
      nextSquares[i] = 'X';
    } else {
      nextSquares[i] = 'O';
    }
    setSquares(nextSquares);
    setXIsNext(!xIsNext);
  }

  function calculateWinner(squares: Array<any>) {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a];
      }
    }
    return null;
  }

  const winner = calculateWinner(squares);
  let status;
  if (winner) {
    status = 'Winner: ' + winner;
  } else {
    status = 'Next player: ' + (xIsNext ? 'X' : 'O');
  }

  return (
    <>
      <div className="status">{status}</div>
      <div className="board-row">
        <Square onSquareClick={() => handleClick(0)} value={squares[0]}></Square>
        <Square onSquareClick={() => handleClick(1)} value={squares[1]}></Square>
        <Square onSquareClick={() => handleClick(2)} value={squares[2]}></Square>
      </div>
      <div className="board-row">
        <Square onSquareClick={() => handleClick(3)} value={squares[3]}></Square>
        <Square onSquareClick={() => handleClick(4)} value={squares[4]}></Square>
        <Square onSquareClick={() => handleClick(5)} value={squares[5]}></Square>
      </div>
      <div className="board-row">
        <Square onSquareClick={() => handleClick(6)} value={squares[6]}></Square>
        <Square onSquareClick={() => handleClick(7)} value={squares[7]}></Square>
        <Square onSquareClick={() => handleClick(8)} value={squares[8]}></Square>
      </div>
    </>
  );
}
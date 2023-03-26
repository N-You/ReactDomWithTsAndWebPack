import React, { MouseEventHandler, useState } from 'react';
import './styles/Square.sass';

interface SquareProps {
  value: number | string;
  onSquareClick: MouseEventHandler<HTMLButtonElement> | undefined;
}

const Square: React.FC<SquareProps> = ({ value, onSquareClick }) => {
  return (
    <button className="Square" onClick={onSquareClick}>
      {value}
    </button>
  );
};

export default Square;

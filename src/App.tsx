import * as React from 'react';
import { Hello } from './components/Hello';
import Board from './pages/TacTicToe/Board';

function App() {
  return (
    <div>
      <Board></Board>
      <Hello compiler="TypeScript" framework="React" />
    </div>
  );
}

export default App;

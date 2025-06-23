import { useState } from 'react';

const TicTacToe = () => {
  
  const initialBoard = Array(9).fill(null);
  const [board, setBoard] = useState(initialBoard);
  const [isXTurn, setIsXTurn] = useState(true);
  const [winner, setWinner] = useState(null);

  const handleClick = (index) => {
    if (board[index] || winner) return;

    const updatedBoard = [...board];
    updatedBoard[index] = isXTurn ? 'X' : 'O';
    setBoard(updatedBoard);
    setIsXTurn(!isXTurn);

    const win = checkWinner(updatedBoard);
    if (win) setWinner(win);
    else if (!updatedBoard.includes(null)) setWinner('Draw');
  };

  const checkWinner = (squares) => {
    const combos = [
      [0, 1, 2], [3, 4, 5], [6, 7, 8],
      [0, 3, 6], [1, 4, 7], [2, 5, 8],
      [0, 4, 8], [2, 4, 6],
    ];

    for (let [a, b, c] of combos) {
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a];
      }
    }
    return null;
  };

  const resetGame = () => {
    setBoard(initialBoard);
    setIsXTurn(true);
    setWinner(null);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-4">
      <h1 className="text-4xl font-bold mb-6 text-blue-600">Tic Tac Toe</h1>

      <div className="grid grid-cols-3 gap-2 w-72 sm:w-80 mb-6">
        {board.map((val, idx) => (
          <div
            key={idx}
            onClick={() => handleClick(idx)}
            className="w-24 h-24 sm:w-28 sm:h-28 flex items-center justify-center border-4 border-blue-400 bg-white text-3xl sm:text-4xl font-bold cursor-pointer hover:bg-blue-50"
          >
            {val}
          </div>
        ))}
      </div>

      <div className="text-xl font-medium text-gray-700 mb-4">
        {winner
          ? winner === 'Draw'
            ? "It's a Draw!"
            : `Winner: ${winner}`
          : `Turn: ${isXTurn ? 'X' : 'O'}`}
      </div>

      <button
        onClick={resetGame}
        className="px-6 py-2 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700"
      >
        Reset Game
      </button>
    </div>
  );
};

export default TicTacToe;
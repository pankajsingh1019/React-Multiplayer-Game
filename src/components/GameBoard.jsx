import { useState } from "react";

export default function GameBoard({ onSelectPlayer, activePlayer }) {
  const [gameBoard, setGameBoard] = useState([
    [null, null, null],
    [null, null, null],
    [null, null, null],
  ]);

  function handleBoard(rowIndex, index) {
    setGameBoard((gameBoard) => {
      const updatedBoard = [
        ...gameBoard.map((innerArray) => [...innerArray]),
      ];
      updatedBoard[rowIndex][index] = activePlayer;
      //console.log(updatedBoard);
      return updatedBoard;
    });

    onSelectPlayer();
    //console.log(gameBoard);
  }

  return (
    <ol id="game-board">
      {gameBoard.map((row, rowIndex) => (
        <li key={rowIndex}>
          <ol>
            {row.map((symbol, index) => (
              <li key={index}>
                <button
                  onClick={() => {
                    if (gameBoard[rowIndex][index] === null) {
                      handleBoard(rowIndex, index);
                    }
                  }}
                >
                  {symbol}
                </button>
              </li>
            ))}
          </ol>
        </li>
      ))}
    </ol>
  );
}

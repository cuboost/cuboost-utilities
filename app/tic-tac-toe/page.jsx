"use client";

import { useState } from "react";
import Board from "./Board";

export default function TicTacToe() {
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const [currentMove, setCurrentMove] = useState(0);
  const xIsNext = currentMove % 2 === 0;
  const currentSquares = history[currentMove];

  function handlePlay(nextSquares) {
    const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
    setHistory(nextHistory);
    setCurrentMove(nextHistory.length - 1);
  }

  function jumpTo(nextMove) {
    setCurrentMove(nextMove);
  }

  const moves = history.map((move) => {
    if (move > 0) {
      move = "Move " + squares;
    } else {
      move = "Start of game";
    }
    // return (
    //     <li key={move}>
    //         <button onClick={() => jumpTo(move)}>{description}</button>
    //     </li>
    // );
  });

  return (
    <div>
      <h1>Tic Tac Toe</h1>
      <Board
        xIsNext={xIsNext}
        squares={currentSquares}
        history={history}
        onPlay={handlePlay}
      />
    </div>
  );
}

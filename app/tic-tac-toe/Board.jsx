import Square from "./Square";
import Message from "./Message";
import MoveSearch from "./MoveSearch";

export default function Board({ xIsNext, squares, onPlay, history }) {
  let status;

  function calculateWinner(squares) {
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
      if (
        squares[a] &&
        squares[a] === squares[b] &&
        squares[a] === squares[c]
      ) {
        return squares[a];
      }
    }
    return null;
  }

  function handleClick(i) {
    if (calculateWinner(squares) || squares[i]) {
      return;
    }
    const nextSquares = squares.slice();
    if (xIsNext) {
      nextSquares[i] = "X";
    } else {
      nextSquares[i] = "O";
    }
    onPlay(nextSquares);
  }

  const winner = calculateWinner(squares);
  if (winner) {
    status = "Winner: " + winner;
  } else {
    status = "Next player: " + (xIsNext ? "X" : "O");
  }

  return (
    <div>
      {/* Winner / Next Move */}
      <h2>{status}</h2>

      <MoveSearch history={history} />

      {/* Board */}
      <div className="grid grid-cols-3 gap-5 w-fit select-none mx-auto">
        {[...Array(9)].map((e, i) => (
          <Square
            key={i}
            value={squares[i]}
            onSquareClick={() => handleClick(i)}
          />
        ))}
      </div>

      {/* Winner Message */}
      {winner && <Message winner={winner} />}
    </div>
  );
}

export default function Square({ value, onSquareClick }) {
  return (
    <button
      className=" bg-slate-100/70 w-28 h-28 rounded-xl text-4xl"
      onClick={onSquareClick}
    >
      {value}
    </button>
  );
}

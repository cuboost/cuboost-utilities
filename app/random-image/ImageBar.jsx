"use client";

export default function ImageBar({ data, getImages }) {
  return (
    <div>
      {data.page}
      <button onClick={() => getImages("2")}>Next</button>
    </div>
  );
}

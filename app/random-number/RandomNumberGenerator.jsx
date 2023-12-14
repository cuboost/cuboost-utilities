"use client";

import { useEffect, useState, useCallback } from "react";

export default function RandomNumberGenerator() {
  const [number, setNumber] = useState(0);
  const [min, setMin] = useState(0);
  const [max, setMax] = useState(10);

  const generateNumber = useCallback(() => {
    setNumber(Math.floor(Math.random() * (max - min + 1)) + min);
  }, [setNumber, max, min]);

  useEffect(() => {
    generateNumber();
  }, [generateNumber]);

  return (
    <div className="flex justify-evenly items-center gap-5 w-4/5 h-3/5 mx-auto">
      <div className="flex justify-center items-center flex-col">
        <h2 className="text-7xl">{number}</h2>
        <button onClick={generateNumber}>Generate</button>
      </div>
      <div className="flex flex-col gap-2">
        {/* Min */}
        <label htmlFor="min">Minimum</label>
        <input
          type="number"
          name="min"
          id="min"
          min="0"
          value={min}
          onChange={(e) => setMin(e.target.value)}
        />
        {/* Max */}
        <label htmlFor="max">Maximum</label>
        <input
          type="number"
          name="max"
          id="max"
          min="1"
          value={max}
          onChange={(e) => setMax(e.target.value)}
        />
      </div>
    </div>
  );
}

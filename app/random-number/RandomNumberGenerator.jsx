"use client";

import { useState } from "react";

export default function RandomNumberGenerator() {

    const [number, setNumber] = useState(0);
    const [min, setMin] = useState(0);
    const [max, setMax] = useState(10);

    var result;

    function generateNumber() {
        setTimeout(function () {
            var min = parseInt(document.getElementById("min").value);
            var max = parseInt(document.getElementById("max").value);
            result = Math.floor(Math.random() * (max - min + 1)) + min;
            setNumber(result);
        }, 50);
    };

    return (
        <div>
            <h2>{number}</h2>
            <button onClick={generateNumber}>Generate</button>
            {/* Min */}
            <label for="min">Minimum</label>
            <input type="number" name="min" id="min" value="1" />
            {/* Max */}
            <label for="max">Maximum</label>
            <input type="number" name="max" id="max" value="10" />
        </div>
    );
}

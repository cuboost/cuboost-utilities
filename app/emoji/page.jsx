"use client";

import { useState } from "react";
import { emojiList } from "./emoji-list";

export default function Emoji() {
  // Arrays
  const [randomEmojis, setRandomEmojis] = useState([]);

  // Generate Emoji
  function generate() {
    var i;
    for (i = 0; i < 4; i++) {
      var randomIndex = Math.floor(Math.random() * emojiList.length);
      setRandomEmojis(randomEmojis.push(emojiList[randomIndex]));
    }
    console.log(randomEmojis);
  }
  return (
    <div>
      <h1>Emoji</h1>
      {randomEmojis &&
        randomEmojis.map((emoji) => (
          <div
            dangerouslySetInnerHTML={{ __html: emoji }}
            className="text-5xl"
          />
        ))}
      <button onClick={generate}>Generate</button>
    </div>
  );
}

"use client";

import Image from "next/image";
import { useState } from "react";
import { AiOutlineInfoCircle } from "react-icons/ai";

export default function PexelImage({ image }) {
  const [info, setInfo] = useState(false);

  return (
    <div>
      <div className="relative h-full">
        <AiOutlineInfoCircle
          onClick={() => setInfo(!info)}
          className="absolute top-5 right-5 bg-gradient-to-br from-slate-400/50 to-slate-600/80 p-1 rounded-full text-white text-3xl cursor-pointer hover:scale-105 active:scale-95 transition"
        />
        <Image
          id={image.id}
          src={image.src.original}
          width={image.width}
          height={image.height}
          quality="100"
          draggable="false"
          alt={image.alt}
          className=" rounded-3xl h-full select-none object-cover"
        />

        {info && (
          <>
            <div className="absolute bottom-5 left-5 bg-gradient-to-br from-slate-400/50 to-slate-600/80 px-3 py-2 rounded-lg text-white">
              <a href={image.url} target="_blank">
                Photo
              </a>{" "}
              taken by{" "}
              <a href={image.photographer_url} target="_blank">
                {image.photographer}
              </a>{" "}
              on Pexels.
            </div>
            <a
              href="https://www.pexels.com"
              target="_blank"
              className="absolute bottom-5 right-5 bg-gradient-to-br from-slate-400/50 to-slate-600/80 px-3 py-2 rounded-lg"
            >
              <Image
                src="https://images.pexels.com/lib/api/pexels-white.png"
                width="100"
                height="100"
                alt="Pexels Logo"
              />
            </a>
          </>
        )}
      </div>
    </div>
  );
}

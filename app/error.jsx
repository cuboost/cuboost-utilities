"use client"; // Error components must be Client components

import { MdError } from "react-icons/md";

import { useEffect } from "react";

export default function Error({ error, reset }) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div className="text-center flex flex-col justify-center items-center h-full">
      <MdError className="text-8xl mx-auto text-cyan-700" />
      <h2>Something went wrong!</h2>
      <h4>Error: {error.message}</h4>
      <button
        onClick={
          // Attempt to recover by trying to re-render the segment
          () => reset()
        }
        className="button-outline mt-5"
      >
        Try again
      </button>
    </div>
  );
}

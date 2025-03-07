import React from "react";

export default function ErrorMessage({ message }) {
  return (
    <div
      className="text-sm flex justify-center text-center
      text-red-500"
    >
      {message}
    </div>
  );
}

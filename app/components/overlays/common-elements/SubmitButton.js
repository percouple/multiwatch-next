import React from "react";

export default function SubmitButton({ disabledSubmit, textContent }) {

  return (
    <button
      id="createUserButton"
      className={`rounded-lg w-48 h-10 m-4 bg-accent-2 font-bold text-bkg`}
      disabled={disabledSubmit}
    >
      {textContent}
    </button>
  );
}

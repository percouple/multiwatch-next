import React from "react";
import { darken } from "../../../util/cssUtils";
import { themes } from '../../../../tailwind.config';
import { useSelector } from "react-redux";

export default function SubmitButton({ disabledSubmit, textContent }) {
  const currentTheme = useSelector((state) => state.theme.theme);

  return (
    <button
      id="createUserButton"
      className={`rounded-lg min-w-40 min-h-8 m-4 ${
        disabledSubmit
          ? `bg-${darken(themes.light.backgroundColor, 40)} text-${themes[currentTheme].textColor} cursor-not-allowed`
          : `border-2 border-${themes[currentTheme].highlightColor.clockOff} text-${themes[currentTheme].textColor} cursor-pointer`
      }`}
      disabled={disabledSubmit}
    >
      {textContent}
    </button>
  );
}

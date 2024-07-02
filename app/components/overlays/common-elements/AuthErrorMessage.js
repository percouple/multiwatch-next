import React from "react";
import { themes } from "../../../../tailwind.config";

export default function ErrorMessage({ message }) {
  return (
    <div
      className={`text-${themes.dark.highlightColor.clockOn} text-sm flex justify-center`}
    >
      {message}
    </div>
  );
}

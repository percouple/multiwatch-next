import React from "react";
import { useSelector } from "react-redux";
import { themes } from "../../../../tailwind.config";

export default function Title({ clock }) {
  const currentTheme = useSelector((state) => state.theme.theme);

  return (
    <div className="flex bg-transparent border-none p-4 shadow-sm outline-none text-xl my-4">
      {clock.name}
    </div>
  );
}

import { useEffect, useState } from "react";

export default function SingleStat({ label, time, punchedIn }) {
  let [statColor, setStatColor] = useState("text-skin-textBase");

  // Handle for changing values to change text color based on punchedIn var
  useEffect(() => {
    if (label !== "Last Session" && label !== "Last Updated") {
      setStatColor(punchedIn ? "text-skin-accent-2" : "text-skin-textBase");
    } else {
      setStatColor("text-skin-textBase");
    }
  }, [punchedIn]);

  return (
    <div
      className="flex justify-between items-center bg-skin-backgroundMuted
    w-full p-2 px-4 rounded-sm shadow-md hover:shadow-lg transition-shadow 
    duration-300 ease-in-out"
    >
      <span
        className="w-1/2 text-left font-semibold 
      text-skin-textBase"
      >
        {label}:
      </span>
      <span className={`w-1/2 ${statColor} `}>{time}</span>
    </div>
  );
}

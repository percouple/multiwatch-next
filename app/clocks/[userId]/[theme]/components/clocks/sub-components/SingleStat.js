import { useEffect, useState } from "react";

export default function SingleStat({ label, time, punchedIn }) {
  let [statColor, setStatColor] = useState("text-skin-textBase");

  useEffect(() => {
    if (label !== "Last Started" && label !== "Last Session") {
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
        className="w-1/2 text-left text-lg font-semibold 
      text-skin-textBase p-2"
      >
        {label}:
      </span>
      <span className={`w-1/2 p-2 ${statColor} `}>{time}</span>
    </div>
  );
}

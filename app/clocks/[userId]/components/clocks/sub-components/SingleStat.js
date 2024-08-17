import { useEffect, useState } from "react";
import { nonTailwindColors } from "../../../../../helpers";

export default function SingleStat({ label, time, punchedIn, theme }) {
  let [statColor, setStatColor] = useState(nonTailwindColors[theme].text);

  useEffect(() => {
    console.log("TRIGGERING");
    if (label !== "Last Started") {
      setStatColor(
        punchedIn
          ? nonTailwindColors[theme].clockOn
          : nonTailwindColors[theme].text
      );
    } else {
      setStatColor(nonTailwindColors[theme].text);
    }
  }, [punchedIn]);

  return (
    <div className="flex justify-center items-center w-64">
      <span className="w-1/2 p-1 my-2 border-r-2 border-txt">{label}</span>
      <span className="w-1/2 px-1" style={{ color: statColor }}>
        {time}
      </span>
    </div>
  );
}

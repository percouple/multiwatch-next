import { useEffect, useState } from "react";

export default function SingleStat({ label, time, punchedIn, theme }) {
  let [statColor, setStatColor] = useState("text-skin-textBase");

  useEffect(() => {
    if (label !== "Last Started" && label !== "Last Session") {
      setStatColor(
        punchedIn
          ? "text-skin-accent-2"
          : "text-skin-textBase"
      );
    } else {
      setStatColor("text-skin-textBase");
    }
  }, [punchedIn]);

  return (
    <div className="flex justify-center items-center w-64">
      <span className="w-1/2 p-1 my-2 border-r-2 border-skin-textMuted">{label}</span>
      <span className={`w-1/2 px-1 ${statColor} `}>
        {time}
      </span>
    </div>
  );
}

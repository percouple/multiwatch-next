import { useEffect, useState } from "react";

export default function SingleStat({ label, time, punchedIn, editable }) {
  let [statColor, setStatColor] = useState("text-skin-textBase");
  let [statValue, setStatValue] = useState(time);

  useEffect(() => {
    if (label !== "Last Started" && label !== "Last Session") {
      setStatColor(punchedIn ? "text-skin-accent-2" : "text-skin-textBase");
    } else {
      setStatColor("text-skin-textBase");
    }
  }, [punchedIn]);

  const changeHandler = (e) => {
    e.preventDefault();
    setStatValue(e.target.value)
    console.log(e.target.value)
  }

  const submitHandler = (e) => {
    e.preventDefault();
    console.log("SUBMITTING")
  }

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
      </span> {
        editable ? 
        <input
        placeholder={time}
        className={`w-1/2 p-2 placeholder:${statColor}
        bg-skin-backgroundBase`}
        onChange={changeHandler}
        onBlur={submitHandler}
        onSubmit={submitHandler}
        name={label}
        value={statValue}
        ></input> :
        <span className={`w-1/2 p-2 bg-skin-transparent ${statColor} `}>{time}</span>
      }
    </div>
  );
}

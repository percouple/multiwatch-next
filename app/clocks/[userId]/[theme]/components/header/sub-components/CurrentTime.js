import { useState, useEffect } from "react";
// import { nonTailwindColors } from "../../../../../helpers";

export default function CurrentTimeCounter({ theme }) {
  let [currentTime, setCurrentTime] = useState("");
  let [amPm, setAmPm] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setCurrentTime(now.toLocaleTimeString().slice(0, -2));
      setAmPm(now.toLocaleTimeString().slice(-2));
    };

    updateTime(); // Initial call
    const interval = setInterval(updateTime, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative flex mt-4 justify-between w-full max-w-[300px]
    ">
      <div className="w-full max-w-56 text-left">
        <h1
          className="font-thin text-6xl mb-8 current-time-header-box-shadow"
        >
          {currentTime}
        </h1>
      </div>
      <div className="absolute top-16 text-2xl align-sub text-skin-accent-1">
        {amPm}
      </div>
    </div>
  );
}

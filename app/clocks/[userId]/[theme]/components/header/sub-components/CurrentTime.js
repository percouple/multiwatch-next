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
    <div className="relative flex mt-4 justify-between min-w-[140px]
    w-fit md:min-w-[300px]
    ">
      <div className="text-4xl w-full max-w-56 text-left font-thin 
      md:text-5xl mb-8 current-time-header-box-shadow">
          {currentTime}
      </div>
      <div className="absolute top-11 md:top-16 text-2xl align-sub text-skin-accent-1">
        {amPm}
      </div>
    </div>
  );
}

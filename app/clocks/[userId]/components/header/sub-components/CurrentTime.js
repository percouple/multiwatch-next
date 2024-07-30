"use client";

import React, { useState, useEffect } from "react";
import { nonTailwindColors } from "../../../../../helpers";

export default function CurrentTimeCounter({ theme }) {
  console.log(theme)
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
    <div className="relative flex mt-4 justify-between max-w-[300px]">
      <div className="min-w-56 text-left">
        <h1
          className="font-thin text-6xl mb-8"
          style={{
            boxShadow: `0 4px 0 0 ${nonTailwindColors[theme].clockOn} `,
          }}
        >
          {currentTime}
        </h1>
      </div>
      <div className="absolute top-16 text-2xl align-sub text-accent-1">
        {amPm}
      </div>
    </div>
  );
}

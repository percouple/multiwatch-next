"use client";

import React, { useState, useEffect } from "react";

export default function CurrentTimeCounter() {
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
    <div className="flex justify-between max-w-[300px]">
      <h1 className="font-thin text-6xl">{currentTime}</h1>
      <div className="text-2xl align-sub ml-4 text-accent-1">{amPm}</div>
    </div>
  );
}

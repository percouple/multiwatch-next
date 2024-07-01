'use client'

import React, { useState, useEffect } from "react";

export default function CurrentTimeCounter() {
  let [currentTime, setCurrentTime] = useState('');
  let [amPm, setAmPm] = useState('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setCurrentTime(now.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' }));
      setAmPm(now.toLocaleTimeString('en-US', { hour12: true }).slice(-2));
    };

    updateTime(); // Initial call
    const interval = setInterval(updateTime, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex items-baseline">
      <h1 className="font-thin text-5xl flex justify-center xs:text-[15vw]">
        {currentTime}
      </h1>
      <div className="text-2xl ml-4">
        {amPm}
      </div>
    </div>
  );
}
import React from "react";
import { secondsToTime } from "../../../../../helpers";

export default function CurrentSessionClock({ secondsPassed }) {
  return (
    <div className="text-5xl font-thin">
      {secondsToTime(secondsPassed) || "00:00:00"}
    </div>
  );
}

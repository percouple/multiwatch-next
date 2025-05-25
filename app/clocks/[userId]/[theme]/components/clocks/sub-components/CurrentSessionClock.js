import React from "react";
import { secondsToTime } from "../../../../../../helpers";

export default function CurrentSessionClock({ secondsPassed }) {
  return (
    <div className="text-3xl font-thin md:text-4xl">
      {secondsToTime(secondsPassed) || "00:00:00"}
    </div>
  );
}

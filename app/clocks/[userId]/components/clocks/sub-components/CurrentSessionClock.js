import React from "react";
import { secondsToTime } from "../../../../../helper-functions";

export default function CurrentSessionClock({ secondsPassed }) {
  return <div className="text-5xl font-thin m-4">{secondsToTime(secondsPassed) || "00:00:00"}</div>;
}

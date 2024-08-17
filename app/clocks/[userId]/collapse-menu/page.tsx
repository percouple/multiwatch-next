import React from "react";
import Link from "next/link";
import { routingDataArray } from "./routing-data";

interface RoutingDataItem {
  title: string;
  url: string;
}

export default function Login({ params }) {
  const routingData: RoutingDataItem[] = routingDataArray(params.userId);
  return (
    <div className="absolute w-full h-screen">
      <Link
        className="absolute inset-0 cursor-default bg-neutral-950 bg-opacity-40 z-10"
        href={`/clocks/${params.userId}`}
      ></Link>
      <div className="flex flex-col justify-around items-center p-4 pt-6 w-72 h-auto 
      absolute rounded-lg border-4 border-accent-1 top-1/4 left-1/2 transform 
      -translate-x-1/2 bg-bkg z-20">
        {routingData.map((entry, idx) => {
          return (
            <Link
              key={idx}
              href={entry.url}
              className="text-accent-1 text-2xl border-accent-2 text-center border-4 
              p-4 min-w-[90%] rounded-lg font-bold mb-4"
            >
              {entry.title}
            </Link>
          );
        })}
      </div>
    </div>
  );
}

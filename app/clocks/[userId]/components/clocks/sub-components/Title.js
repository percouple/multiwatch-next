import React from "react";

export default function Title({ clock, clockColor }) {

  return (
    <div className="flex bg-transparent border-none cursor-default pt-2 pb-1 w-2/3 outline-none text-2xl"
    style={{boxShadow: `0px 3px 0 0 ${clockColor}`}}
    >
      {clock.name}
    </div>
  );
}

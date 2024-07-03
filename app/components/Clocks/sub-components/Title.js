import React from "react";

export default function Title({ clock, clockColor }) {

  return (
    <div className="underline-box-shadow flex bg-transparent border-none p-4 outline-none text-3xl my-4"
    style={{boxShadow: `0px 4px 0 0 ${clockColor}`}}
    >
      {clock.name}
    </div>
  );
}

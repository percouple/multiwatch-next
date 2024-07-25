"use client";
import { useState } from "react";
import ClockContainer from "./sub-components/ClockContainer";
import EditClockContainer from "./sub-components/EditClockContainer";

export default function ClientClockContainer({ clockData, theme }) {
  let [clientClocks, setClientClocks] = useState(clockData);

  return (
    <div className="flex justify-center items-center flex-wrap w-full">
      {clientClocks.map((clock) =>
        clock.editing ? (
          <EditClockContainer
            key={clock.id}
            clock={clock}
            theme={theme}
            setClientClocks={setClientClocks}
            clientClocks={clientClocks}
          />
        ) : (
          <ClockContainer
            id={clock.id}
            key={clock.id}
            userId={clock.userId}
            clock={clock}
            theme={theme}
            clientClocks={clientClocks}
            setClientClocks={setClientClocks}
          />
        )
      )}
    </div>
  );
}

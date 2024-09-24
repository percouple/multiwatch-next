"use client";
import { useState } from "react";
import ClockContainer from "./sub-components/ClockContainer";
import EditClockContainer from "./sub-components/EditClockContainer";

export default function ClientClockContainer({ clockData, theme }) {
  let [clientClocks, setClientClocks] = useState(clockData);

  return (
    <div className="grid md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 m-2">
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

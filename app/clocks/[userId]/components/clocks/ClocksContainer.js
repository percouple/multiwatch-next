import React from "react";
import ClockContainer from "./sub-components/ClockContainer";
import EditClockContainer from "./sub-components/EditClockContainer";
import prisma from "../../../../lib/db";

export default async function ClocksContainer({ theme, userId }) {
  const clockData = await prisma.clocks.findMany({
    where: {
      userId: userId,
    },
  });

  return (
    <div className="flex justify-center">
      <div className="flex justify-center items-center flex-wrap w-full">
        {clockData.map((clock) => 
          clock.editing ? (
            <EditClockContainer key={clock.id} clock={clock} theme={theme} />
          ) : (
            <ClockContainer
              id={clock.id}
              key={clock.id}
              userId={userId}
              clock={clock}
              theme={theme}
            />
          )
        )}
      </div>
    </div>
  );
}

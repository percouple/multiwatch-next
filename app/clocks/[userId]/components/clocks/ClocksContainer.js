import React from "react";
import ClientClockContainer from './ClientClockContainer'
import prisma from "../../../../lib/db";

export default async function ClocksContainer({ theme, userId }) {
  const clockData = await prisma.clocks.findMany({
    where: {
      userId: userId,
    },
  });

  return (
    <div className="flex justify-center">
      <ClientClockContainer clockData={clockData} theme={theme}/>
    </div>
  );
}

import React from "react";
import ClockContainer from "./sub-components/ClockContainer";
import EditClockContainer from "./sub-components/EditClockContainer";
import { setClocksMessage } from "../state/slices/errorMessagesSlice";
import prisma from "../../lib/db";

export default async function ClocksContainer(props) {

    const userId = "1";
    const clockData = await prisma.clocks.findMany({
      where: {
        userId: userId,
      },
    });

    console.log(clockData)

    return (
      <div className="flex justify-center">
        <div className="flex justify-center items-center flex-wrap w-full">
          Clock
          {clockData.map((clock, idx) =>
            clock.editing ? (
              <EditClockContainer key={clock.clockId} clock={clock} />
            ) : (
              <ClockContainer
                id={clock.clockId}
                key={clock.clockId}
                clockInfo={clock}
                punchedIn={props.punchedIn}
                onPunchIn={props.handlePunchIn}
                onPunchOut={props.handlePunchOut}
              />
            )
          )}
        </div>
      </div>
    );
}

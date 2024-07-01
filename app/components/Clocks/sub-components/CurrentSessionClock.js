import React from "react";
import styled from "styled-components";
import { secondsToTime } from "../../../helper-functions";

const StyledCurrentSession = styled.div`
  font-size: 3rem;
  margin: 10px;
`;

export default function CurrentSessionClock({ secondsPassed }) {
  return (
    <>
      {(
        <StyledCurrentSession>
          {secondsToTime(secondsPassed)}
        </StyledCurrentSession>
      ) || "00:00:00"}
    </>
  );
}

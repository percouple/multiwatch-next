import React from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { clearLoading } from "../../state/slices/loadingSlice";

const StyledLoadingScreen = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 3;
`;

export default function Loading() {

  const dispatch = useDispatch();

  const clickHandler = (e) => {
    console.log(e.target)
    e.stopPropagation();
    dispatch(clearLoading());
  };

  return (
        <StyledLoadingScreen onClick={clickHandler}></StyledLoadingScreen>
  );
}

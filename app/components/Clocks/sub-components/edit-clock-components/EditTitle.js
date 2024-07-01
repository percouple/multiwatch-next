import React, { useState } from "react";
import styled from "styled-components";
import { themes } from "../../../../helper-functions";
import { useSelector } from "react-redux";

const StyledTitle = styled.input`
  display: flex;
  background-color: transparent;
  border: none;
  padding: 4px;
  box-shadow: 0 2px;
  outline: none;
  font-size: 1.5rem;
  margin: 1rem;
  @media (max-width: 420px) {
    width: 75%;
  }
`;

export default function EditTitle({ currentClock, oldClock, setCurrentClock }) {
  const currentTheme = useSelector((state) => state.theme.theme);

  console.log(currentClock)
  let changeHandler = (e) => {
    const { value } = e.target;
    setCurrentClock({...currentClock, name: value});
  };


  return (
    <StyledTitle
      style={{ color: themes[currentTheme].textColor }}
      placeholder={oldClock.name}
      onChange={changeHandler}
      value={currentClock.name}
    ></StyledTitle>
  );
}

import React from "react";
import CurrentTimeDisplay from "./sub-components/CurrentTime";
import LoginButton from "./sub-components/LoginButton";
import LogoutButton from "./sub-components/LogoutButton";
import DBUpdateFlag from './sub-components/DBUpdateFlag';
import Theme from "./sub-components/Theme";
import CreateNewTimerButton from "./sub-components/CreateNewTimerButton";
import { useSelector } from "react-redux";

export default function Header() {
  const loggedIn = useSelector((state) => state.auth.loggedIn);
  const needDBUpdate = useSelector((state) => state.clocks.needToUpdateDatabase)

  return (
    <div className="flex justify-between items-center px-12 flex-wrap sm:flex-col sm:justify-center">
      <CurrentTimeDisplay />
      <nav className="flex justify-center items-center">
        {needDBUpdate && <DBUpdateFlag />  }
        <CreateNewTimerButton />
        <Theme /> 
        {loggedIn ? <LogoutButton /> : <LoginButton />}
      </nav>
    </div>
  );
}
import CurrentTimeDisplay from "./sub-components/CurrentTime";
import LoginButton from "./sub-components/LoginButton";
import LogoutButton from "./sub-components/LogoutButton";
import ThemeChangeButton from "./sub-components/ThemeChangeButton";
import CollapsedMenu from "./sub-components/CollapsedMenu";
import CreateNewTimerButton from "./sub-components/CreateNewTimerButton";

export default function Header({ theme, userId }) {
  return (
    <div className="flex justify-between items-center px-12 flex-wrap w-full">
      <div className="flex flex-1">
        <CurrentTimeDisplay theme={theme} className="flex-1" />
      </div>
      <div>
        <div className="flex md:hidden items-center ">
          <CollapsedMenu userId={userId} />
        </div>
        <div className="hidden md:flex items-center flex-1">
          <CreateNewTimerButton theme={theme} userId={userId} />
          <ThemeChangeButton userId={userId} />
          {/* {userId !== "default" ? ( */}
          {/* <LogoutButton theme={theme} userId={userId} /> */}
          {/* ) : ( */}
          <LoginButton theme={theme} userId={userId} />
        </div>
      </div>
    </div>
  );
}

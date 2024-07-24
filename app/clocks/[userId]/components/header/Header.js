import CurrentTimeDisplay from "./sub-components/CurrentTime";
import LoginButton from "./sub-components/LoginButton";
import LogoutButton from "./sub-components/LogoutButton";
// import DBUpdateFlag from "./sub-components/DBUpdateFlag";
import Theme from "./sub-components/Theme";
import CollapsedMenu from "./sub-components/CollapsedMenu";
import CreateNewTimerButton from "./sub-components/CreateNewTimerButton";

export default function Header({ theme, userId }) {
  // const [windowWidth, setWindowWidth] = useState(undefined);

  // useEffect(() => {
  //   function handleResize() {
  //     setWindowWidth(window.innerWidth);
  //   }

  //   // Initial size
  //   handleResize();

  //   // Add event listener
  //   window.addEventListener("resize", handleResize);

  //   // Clean up
  //   return () => window.removeEventListener("resize", handleResize);
  // }, []);

  return (
    <div className="flex justify-between items-center px-12 flex-wrap xs:justify-center">
      <CurrentTimeDisplay />
      <div className="flex justify-center items-center ">
        {/* {windowWidth && windowWidth < 630 ? (
          <CollapsedMenu theme={theme}/>
        ) : ( */}
        <>
          <CreateNewTimerButton theme={theme} userId={userId} />
          {/* <Theme /> */}
          {/* {userId !== "default" ? ( */}
            {/* <LogoutButton theme={theme} userId={userId} /> */}
          {/* ) : ( */}
            <LoginButton theme={theme} userId={userId}/>
          {/* )} */}
        </>
        {/* )} */}
      </div>
    </div>
  );
}

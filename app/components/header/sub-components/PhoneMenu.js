import { useDispatch } from "react-redux";
import { setAuthenticating, setDisplayPhoneMenu, setSigningIn } from "../../state/slices/authSlice";
import { nanoid } from "nanoid";
import { addNewClock, flagForDBUpdate } from "../../state/slices/clockDataSlice";

export default function PhoneMenu() {
  const dispatch = useDispatch();

  const loginHandler = (e) => {
    if (e.target.id === "login") {
      console.log("CLICKING LOGIN");
      e.stopPropagation();
      dispatch(setAuthenticating(true));
      dispatch(setDisplayPhoneMenu(false));
      dispatch(setSigningIn(true));
    }
  };

  const themeHandler = (e) => {
    if (e.target.id === "login") {
      console.log("CLICKING THEME CHANGE");
      e.stopPropagation();
      dispatch(setAuthenticating(true));
      dispatch(setThemeChanging(true));
    }
  };

  const addNewClockHandler = (e) => {
    if (e.target.id === "menu-addNewClock") {
      console.log("CLICKING ADD NEW CLOCK");
      e.stopPropagation();
      const clockId = nanoid();
      const clockNeeds = { userId: "New User", name: "New Clock", clockId: clockId };
      dispatch(addNewClock(clockNeeds));
      dispatch(flagForDBUpdate());
      dispatch(setAuthenticating(false));
    }
  };

  return (
    <div
      className="flex flex-col justify-around items-center p-2 pt-6 w-72 h-auto absolute rounded-lg border-4 border-accent-1 top-30% z-30 bg-bkg"
      id="phoneMenu"
    >
      <div className="text-accent-2 text-2xl font-bold mb-4">Log in</div>
      <div className="text-accent-2 text-2xl font-bold mb-4">Themes</div>
      <div id="menu-addNewClock"
        className="text-accent-2 text-2xl font-bold mb-4 cursor-pointer"
        onClick={addNewClockHandler}
      >
        Create New Clock
      </div>
    </div>
  );
}

import { useDispatch } from "react-redux";
import {
  setAuthenticating,
  setDisplayPhoneMenu,
  setSigningIn,
  setDisplayThemesSelection,
} from "../../state/slices/authSlice";
import { nanoid } from "nanoid";
import {
  addNewClock,
  flagForDBUpdate,
} from "../../state/slices/clockDataSlice";

export default function PhoneMenu() {
  const dispatch = useDispatch();

  const loginHandler = (e) => {
    if (e.target.id === "menu-login") {
      console.log("CLICKING LOGIN");
      e.stopPropagation();
      dispatch(setAuthenticating(true));
      dispatch(setDisplayPhoneMenu(false));
      dispatch(setSigningIn(true));
    }
  };

  const themeHandler = (e) => {
    if (e.target.id === "menu-changeTheme") {
      console.log("CLICKING THEME CHANGE");
      e.stopPropagation();
      dispatch(setAuthenticating(true));
      dispatch(setDisplayPhoneMenu(false));
      dispatch(setDisplayThemesSelection(true));
    }
  };

  const addNewClockHandler = (e) => {
    if (e.target.id === "menu-addNewClock") {
      console.log("CLICKING ADD NEW CLOCK");
      e.stopPropagation();
      const clockId = nanoid();
      const clockNeeds = {
        userId: "New User",
        name: "New Clock",
        clockId: clockId,
      };
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
      <div id="menu-login" className="text-accent-2 text-2xl font-bold mb-4 cursor-pointer m-2 underline" onClick={loginHandler}>
        Log in
      </div>
      <div
        id="menu-changeTheme"
        className="text-accent-2 text-2xl font-bold mb-4 cursor-pointer m-2 underline"
        onClick={themeHandler}
      >
        Themes
      </div>
      <div
        id="menu-addNewClock"
        className="text-accent-2 text-2xl font-bold mb-4 cursor-pointer m-2 underline"
        onClick={addNewClockHandler}
      >
        Create New Clock
      </div>
    </div>
  );
}

import { useDispatch } from "react-redux";
import { setAuthenticating, setSigningIn } from "../../state/slices/authSlice";

export default function PhoneMenu() {
  const dispatch = useDispatch();
  const loginHandler = (e) => {
    if (e.target.id === "login") {
      console.log("CLICKING");
      e.stopPropagation();
      dispatch(setAuthenticating(true));
      dispatch(setSigningIn(true));
    }
  };

  const addNewClockHandler = (e) => {

  }

  return (
    <div className="">
      <div id="login" onClick={loginHandler} className="cursor-pointer text-center border-4 border-accent-2 rounded-md">
        Login
      </div>
      <div>Theme</div>
      <div id="addNewClock" onClick={addNewClockHandler}>Create New Clock</div>
    </div>
  );
}

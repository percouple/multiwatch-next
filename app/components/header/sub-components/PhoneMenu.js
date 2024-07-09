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
    <div className="absolute top-20 left-1/2">
      <div id="login" onClick={loginHandler} className="cursor-pointer border-2">
        Login
      </div>
      <div>Theme</div>
      <div id="addNewClock" onClick={addNewClockHandler}>Create New Clock</div>
    </div>
  );
}

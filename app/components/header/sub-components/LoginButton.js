
import { useDispatch, useSelector } from "react-redux";
import {
  setAuthenticating,
  setSigningIn,
} from "../../../state/slices/authSlice";

export default function LoginButton() {
  const dispatch = useDispatch();
  const authenticating = useSelector((state) => state.auth.authenticating);

  const clickHandler = (e) => {
    if (e.target.id === "dropdownButton") {
      e.stopPropagation();
      dispatch(setAuthenticating(!authenticating));
      dispatch(setSigningIn(true));
    }
  };

  return (
    <div
      id="dropdownButton"
      onClick={clickHandler}
      className="text-center cursor-pointer border-2 border-solid border-accent-1 rounded-md min-w-[4rem]"
    >
      Login
    </div>
  );
}

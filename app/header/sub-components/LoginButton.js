import { useDispatch } from "react-redux";
import {
  setAuthenticating,
  setSigningIn,
} from "../../state/slices/authSlice";

export default function LoginButton() {
  const dispatch = useDispatch();

  const clickHandler = (e) => {
    if (e.target.id === "dropdownButton") {
      e.stopPropagation();
      dispatch(setAuthenticating(true));
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

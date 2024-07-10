import { useDispatch } from "react-redux";
import {
  setBackgroundOverlay,
  setDisplayLogin,
} from "../../state/slices/authSlice";

export default function LoginButton() {
  const dispatch = useDispatch();

  const clickHandler = (e) => {
    if (e.target.id === "dropdownButton") {
      e.stopPropagation();
      dispatch(setBackgroundOverlay(true));
      dispatch(setDisplayLogin(true));
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

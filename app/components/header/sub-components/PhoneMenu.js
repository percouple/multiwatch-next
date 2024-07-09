import { useDispatch } from "react-redux";
import { setAuthenticating, setSigningIn } from "../../state/slices/authSlice";

export default function PhoneMenu() {
  const dispatch = useDispatch();

  const loginHandler = (e) => {
    if (e.target.id === "login") {
      console.log("CLICKING LOGIN");
      e.stopPropagation();
      dispatch(setAuthenticating(true));
      dispatch(setSigningIn(true));
    }
  };

  const addNewClockHandler = (e) => {};

  return (
    <div
      className="flex flex-col justify-around items-center p-2 pt-6 w-72 h-auto absolute rounded-lg border-4 border-accent-1 top-30% z-30 bg-bkg"
      id="phoneMenu"
    >
      <div className="text-accent-2 text-2xl font-bold mb-4">Log in</div>
      <div className="text-accent-2 text-2xl font-bold mb-4">Themes</div>
      <div className="text-accent-2 text-2xl font-bold mb-4">
        Create New Clock
      </div>
    </div>
  );
}

import { useDispatch, useSelector } from "react-redux";
import {
  setBackgroundOverlay,
  setCreatingUser,
  setSigningIn,
} from "../../state/slices/authSlice";
import { clearLoading } from "../../state/slices/loadingSlice";
import AuthCard from "../AuthCard";
import CreateNewUserCard from "../CreateNewUserCard";
import PhoneMenu from '../../header/sub-components/PhoneMenu';
import ThemesDisplay from '../ThemesDisplay';

export default function AuthBackgroundOverlay() {
  const dispatch = useDispatch();
  const backgroundOverlay = useSelector((state) => state.auth.backgroundOverlay);
  const creatingUser = useSelector((state) => state.auth.creatingUser);
  const signingIn = useSelector((state) => state.auth.signingIn);
  const displayPhoneMenu = useSelector(state => state.auth.displayPhoneMenu);
  const displayThemesSelection = useSelector(state => state.auth.displayThemesSelection);

  // Clears state when user clicks off card on screen
  const clickOffChanger = (e) => {
    e.stopPropagation();
    if (e.target.id === "AuthBackgroundOverlay") {
      dispatch(setCreatingUser(false));
      dispatch(setSigningIn(false));
      dispatch(clearLoading());
      dispatch(setBackgroundOverlay(false));
    }
  };

  return (
    <div
      className="absolute inset-0 flex justify-center items-center bg-black bg-opacity-30"
      onClick={clickOffChanger}
      id="AuthBackgroundOverlay"
    >
      {backgroundOverlay && signingIn && <AuthCard />}
      {backgroundOverlay && creatingUser && <CreateNewUserCard />}
      {backgroundOverlay && displayPhoneMenu && <PhoneMenu />}
      {backgroundOverlay && displayThemesSelection && <ThemesDisplay/>}
    </div>
  );
}

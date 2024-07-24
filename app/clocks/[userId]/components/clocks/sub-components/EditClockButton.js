import { setEditingClock } from "../../state/slices/clockDataSlice";
import EditIcon from "../../icons/EditClockButtonIcon";

export default function EditClockButton({ clock, clockColor }) {

  const clickHandler = (e) => {
    // dispatch(setEditingClock(clock.clockId));
    console.log("EDITING")
  };

  return (
    <div
      className="w-8 h-8 bg-cover relative top-1 cursor-pointer bg-bkg"
      onClick={clickHandler}
      style={{ color: `${clockColor}` }}
    >
      <EditIcon />{" "}
    </div>
  );
}

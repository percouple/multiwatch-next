import EditIcon from "../../icons/EditClockButtonIcon";
import { revalidatePath } from "next/cache";

export default function EditClockButton({ clock, clockColor, userId }) {

  const clickHandler = async (e) => {
    // dispatch(setEditingClock(clock.clockId));
    console.log("EDITING")
    // await revalidatePath(`./clocks/${userId}`);
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

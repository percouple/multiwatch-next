import EditIcon from "../../icons/EditClockButtonIcon";

export default function EditClockButton({
  clock,
  clockColor,
  clientClocks,
  setClientClocks,
}) {
  const clickHandler = async (e) => {
    setClientClocks(
      clientClocks.map((clientClock) => {
        if (clientClock.id === clock.id) {
          clientClock.editing = true;
        } 
        return clientClock
      })
    );
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

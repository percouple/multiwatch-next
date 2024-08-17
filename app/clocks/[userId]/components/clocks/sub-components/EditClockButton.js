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
        return clientClock;
      })
    );
  };

  return (
    <div
      className="flex w-44 justify-center items-center font-extrabold italic text-lg text-txt
      bg-transparent cursor-pointer border-4 border-editClockColor rounded-md p-2 mx-4
      mt-4"
      onClick={clickHandler}
    >
      Edit Stats
    </div>
  );
}

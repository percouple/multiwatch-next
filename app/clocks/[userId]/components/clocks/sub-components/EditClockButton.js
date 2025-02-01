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
      className="flex w-44 justify-center items-center font-extrabold italic text-lg 
      text-skin-textInverted cursor-pointer bg-skin-accent-1 
      rounded-md p-2 mx-4 mt-4 hover:bg-skin-accent-2 transition-colors 
      duration-200 ease-in-out"
      onClick={clickHandler}
    >
      Edit Stats
    </div>
  );
}

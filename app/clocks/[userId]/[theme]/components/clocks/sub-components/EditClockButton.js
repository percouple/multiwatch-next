export default function EditClockButton({
  clock,
  clockData,
  setClockData,
}) {
  const clickHandler = async (e) => {
    setClockData(
      clockData.map((singleClock) => {
        if (singleClock.id === clock.id) {
          singleClock.editing = true;
        }
        return singleClock;
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

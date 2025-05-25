export default function EditClockButton({
  clock,
  clockData,
  setClockData,
  handlePunchOut,
}) {
  const clickHandler = async (e) => {

    // Punch out if the user is punched in 
    handlePunchOut();
    
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
      className="flex w-40 justify-center items-center font-extrabold italic
      text-skin-textInverted cursor-pointer bg-skin-backgroundMuted border-4 border-skin-accent-1
      rounded-sm p-1 mx-2 mt-4 hover:border-skin-accent-2 transition-colors 
      duration-300"
      onClick={clickHandler}
    >
      Edit Stats
    </div>
  );
}

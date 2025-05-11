export default function SingleEditStat({
  label,
  setCurrentClock,
  setErrMessage,
  currentClock,
  value,
  placeholder,
  name,
  maxLength
}) {
  // Validates user inputs - digits only
  // Once submitted, alters the current client user clock
  const changeHandler = (e) => {
    const { value, name } = e.target;
    if (isNaN(value)) {
      setErrMessage("Only digits accepted as input");
    } else {
      setCurrentClock((oldStats) => ({ ...oldStats, [name]: Number(value) }));
      setErrMessage("");
    }
  };
  return (
    <div className="flex justify-between items-center bg-skin-backgroundMuted
    w-full p-2 px-4 rounded-sm shadow-md hover:shadow-lg transition-shadow 
    duration-300 ease-in-out">
      <span className="w-1/2 text-left text-lg font-semibold 
      text-skin-textMuted p-2">{label}:</span>
      <input
        type="text"
        name={name}
        className="w-1/2 p-2 bg-transparent text-skin-accent-1"
        onChange={changeHandler}
        value={value}
        placeholder={placeholder}
        maxLength={maxLength}
      />
    </div>
  );
}

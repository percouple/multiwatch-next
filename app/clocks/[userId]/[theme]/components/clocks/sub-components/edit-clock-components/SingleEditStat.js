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
    <div className="flex justify-center items-center w-64">
      <span className="w-1/2 p-1 my-2">{label}</span>
      <input
        type="text"
        name={name}
        className="w-1/2 py-1 px-2 border-2 text-center
        bg-transparent"
        onChange={changeHandler}
        value={value}
        placeholder={placeholder}
        maxLength={maxLength}
      />
    </div>
  );
}

import { useDispatch } from "react-redux";
import { setTheme } from "../state/slices/themeSlice";
import { displayThemes } from "./themesData";

export default function ThemesDisplay() {
  const dispatch = useDispatch();
  const clickHandler = (name) => {
    dispatch(setTheme(name));
  };

  return (
    <div
      className="flex flex-col justify-around items-center p-2 pt-6 w-72 h-auto absolute rounded-lg border-4 border-accent-1 top-30% z-30 bg-bkg"
      id="themesDisplay"
    >
      <div>Select a theme: </div>
      {displayThemes.map((theme, idx) => {
        const [name] = Object.keys(theme);
        return (
          <div
            key={idx}
            className={`w-[85%] flex justify-around items-center rounded-md m-2 p-2 border-accent-2 border-2 hover:bg-neutral-600 transition duration-300 cursor-pointer`}
            onClick={() => clickHandler(name)}
          >
            <h2 onClick={() => clickHandler(name)}>{name}</h2>
            <div className="flex justify-center items-center">
              {theme[name].map((color, idx) => {
                return (
                  <div
                    key={idx}
                    style={{ backgroundColor: color }}
                    className="w-[15px] h-[15px] rounded-full p-2 m-1 border-neutral-500 border-2"
                    onClick={() => clickHandler(name)}
                  ></div>
                );
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
}

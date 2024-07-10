import { useDispatch } from "react-redux";
import { setTheme } from "../state/slices/themeSlice";
import { displayThemes } from "./themesData";

export default function ThemesDisplay() {
  const dispatch = useDispatch();
  const clickHandler = (e) => {
    dispatch(setTheme(e.target.id));
  };

  return (
    <div
      className="flex flex-col justify-around items-center p-2 pt-6 w-72 h-auto absolute rounded-lg border-4 border-accent-1 top-30% z-30 bg-bkg"
      id="themesDisplay"
    >
      <div>Select a theme below: </div>
      {displayThemes.map((theme, idx) => {
        const [name] = Object.keys(theme);
        return (
          <div
            key={idx}
            id={name}
            className="w-[85%] mt-2 flex justify-around items-center hover:bg-neutral-400 transition duration-300 rounded-md cursor-pointer"
            onClick={clickHandler}
          >
            <h2>{name}</h2>
            <div className="flex justify-center items-center">
              {theme[name].map((color, idx) => {
                return (
                  <div
                    key={idx}
                    style={{ backgroundColor: color }}
                    className="w-[15px] h-[15px] rounded-full p-2 m-1 border-neutral-500 border-2"
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

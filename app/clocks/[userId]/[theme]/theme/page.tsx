"use client";

import { displayThemes } from "./themesList";
import Link from "next/link";
import { editUser } from "../../../../../http_helpers";
import { useParams, useRouter } from "next/navigation";

export default function ThemesDisplay(props) {
  const params = useParams();
  const router = useRouter();

  const clickHandler = async (name) => {
    const newTheme = await editUser(params.userId, { theme_preference: name });
    router.push(`/clocks/${params.userId}/${newTheme}/theme`)
    console.log(newTheme);
  };

  return (
    <div className="absolute w-full h-screen">
      <Link
        className="absolute inset-0 cursor-default bg-neutral-950 bg-opacity-40 z-10"
        href={`/clocks/${params.userId}/${params.theme}`}
      ></Link>
      <div
        className="flex flex-col justify-around items-center p-4 pt-6 w-72 h-auto
        absolute rounded-lg border-4 border-skin-accent-1 top-1/4 left-1/2 transform 
        -translate-x-1/2 bg-skin-backgroundBase z-20"
        id="authForm"
      >
        <div className="text-2xl text-accent-1 font-normal mb-2">
          Select a theme
        </div>
        {displayThemes.map((theme, idx) => {
          const [name] = Object.keys(theme);
          return (
            <div
              key={idx}
              className={`w-[85%] flex justify-around items-center rounded-md m-2 p-2 
                border-skin-accent-2 border-2 hover:bg-skin-backgroundMuted transition duration-300 
                cursor-pointer`}
              onClick={() => {
                clickHandler(name);
              }}
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
    </div>
  );
}

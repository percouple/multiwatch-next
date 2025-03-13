"use client";

import Link from "next/link";
import { editUser } from "../../../../../http_helpers";
import { useParams, useRouter } from "next/navigation";
import IndividualThemeCard from './IndividualThemeCard';

export default function ThemesDisplay(props) {
  const params = useParams();
  const router = useRouter();

  const clickHandler = async (name) => {
    const newTheme = await editUser(params.userId, { theme_preference: name });
    router.push(`/clocks/${params.userId}/${newTheme}`)
  };

  // List out the display themes available to user, 
  // Iterate over them to create boxes for theme selection
  const displayThemes = ["light","dark", "retro", "olive", "grape", "oxford", "cliffs"]

  return (
    <div className="absolute w-full h-screen">
      {/* When clicking off of the card, exit card view */}
      <Link
        className="absolute inset-0 cursor-default bg-neutral-950 bg-opacity-40 z-10"
        href={`/clocks/${params.userId}/${params.theme}`}
      ></Link>
      <div
        className="flex flex-col justify-around items-center p-4 pt-6 w-72 h-auto
        absolute rounded-lg border-4 border-skin-accent-1 top-1/4 left-1/2 transform 
        -translate-x-1/2 bg-skin-backgroundBase z-20"
      >
        <div className="text-2xl text-accent-1 font-normal mb-2">
          Select a theme
        </div>
        {/* Map over themes and make a button element with each one */}
        {displayThemes.map((theme, idx) => {
          return (
            <div
            key={idx}
            className={`w-[85%] flex justify-around items-center rounded-md m-2 p-2 
                      bg-skin-backgroundMuted border-2 border-transparent transition duration-300 hover:bg-skin-backgroundBase
                      hover:border-2 hover:border-skin-backgroundMuted
                      cursor-pointer`}
            onClick={() => {
              clickHandler(theme);
            }}
          >
            <IndividualThemeCard theme={theme} />
          </div>
          );
        })}
      </div>
    </div>
  );
}

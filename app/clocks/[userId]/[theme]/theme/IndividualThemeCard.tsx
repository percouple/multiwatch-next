import { editUser } from "../../../../../http_helpers";
import { useParams, useRouter } from "next/navigation";

export default function ThemesDisplay({theme}) {
  const params = useParams();
  const router = useRouter();

  const clickHandler = async (name) => {
    const newTheme = await editUser(params.userId, { theme_preference: name });
    router.push(`/clocks/${params.userId}/${newTheme}`)
  };

  // List of color variable namees for mapping in each box
  const colorNames = [
    "skin-backgroundBase",
    "skin-textBase",
    "skin-accent-1",
    "skin-accent-2",
  ];

  return (
    <>
      <h2 onClick={() => clickHandler(theme)}>{theme}</h2>
      <div className={`theme-${theme} flex justify-center items-center`}>
        {colorNames.map((colorName, idx) => {
          return (
            <div
              key={idx}
              className={`bg-${colorName} w-[15px] h-[15px] rounded-full p-2 m-1 border-neutral-500 border-2`}
              onClick={() => clickHandler(theme)}
            ></div>
          );
        })}
      </div>
    </>
  );
}

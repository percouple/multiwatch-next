import Link from "next/link";

export default function Theme({userId}) {

  return (
    <Link
      href={`/clocks/${userId}/theme`}
      className="text-center cursor-pointer mx-2 py-2 px-6 
      bg-skin-backgroundBase border-4 border-solid border-skin-accent-1 rounded-md 
      min-w-[4rem] transition-all hover:border-skin-accent-2 
      duration-300 ease-in-out"
    >
      Themes
    </Link>
  );
}

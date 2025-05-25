import Link from "next/link";
import { useParams } from "next/navigation";

export default function Theme({userId}) {
  const params = useParams();

  return (
    <Link
      href={`/clocks/${userId}/${params.theme}/theme`}
      className="text-center cursor-pointer mx-2 py-1 px-4 md:py-2 md:px-6
      bg-skin-backgroundBase border-4 border-solid border-skin-accent-1 rounded-md 
      min-w-[4rem] transition-all hover:border-skin-accent-2 
      duration-300 ease-in-out"
    >
      Themes
    </Link>
  );
}

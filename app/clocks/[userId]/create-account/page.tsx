"use client"

import InputForm from "./InputForm";
import { useRouter } from "next/router";
import Link from "next/link";

export default function CreateNewUserCard({ params }) {

  // const router = useRouter();

  // const clickOffHandler = (e: React.MouseEvent<HTMLDivElement>) => {
  //   e.stopPropagation();
  //   if (e.target instanceof HTMLDivElement && e.target.id === "authForm") {
  //     // Prevent click on the form from closing it
  //     return;
  //   } else {
  //     // Redirect to home page or any other page
  //     router.push('/'); // Adjust path as needed
  //   }
  // };

  return (
    <div className="absolute w-full h-screen">
      <Link className="absolute inset-0 bg-neutral-950 cursor-default bg-opacity-40 z-10" href={`/clocks/${params.userId}`}></Link>
      <div
        className="flex flex-col justify-around items-center p-2 pt-6 w-72 h-auto absolute rounded-lg border-4 border-accent-1 top-1/4 left-1/3 z-30 bg-bkg"
        id="authForm"
      >
        <h1 className="text-accent-1 text-2xl font-bold mb-10 mt-4">
          Create new user
        </h1>
        <InputForm />
      </div>
    </div>
  );
}

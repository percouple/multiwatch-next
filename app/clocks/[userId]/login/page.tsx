import React from "react";
import InputForm from "../components/common/InputForm";
import Link from "next/link";

export default function Login({ params }) {
  return (
    <div className="absolute w-full h-screen">
      <Link
        className="absolute inset-0 cursor-default bg-neutral-950 bg-opacity-40 z-10"
        href={`/clocks/${params.userId}`}
      ></Link>
      <div
        className="flex flex-col justify-around items-center p-4 pt-6 w-72 h-auto absolute rounded-lg border-4 border-accent-1 top-1/4 left-1/2 transform -translate-x-1/2 bg-bkg z-20"
        id="authForm"
      >
        <h1 className="text-accent-1 text-4xl font-bold mb-4">Log in</h1>
        <p className="mb-4">or</p>
        <Link
          href={`/clocks/${params.userId}/create-account`}
          className="underline cursor-pointer mb-8"
        >
          create an account
        </Link>
        <InputForm />
      </div>
    </div>
  );
}

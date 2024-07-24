import React from "react";
import InputForm from "./InputForm";
import Link from "next/link";

export default function Login ({ theme }) {
  return (
    <div
      className="flex flex-col justify-around items-center p-2 pt-6 w-72 h-auto absolute rounded-lg border-4 border-accent-1 top-30% z-30 bg-bkg"
      id="authForm"
    >
      <h1 className="text-accent-1 text-4xl font-bold mb-4">Log in</h1>
      or
      <Link
        href={'../../create-account'}
        className="underline cursor-pointer mb-8"
        // onClick={createAccountHandler}
      >
        create an account
      </Link>
      <InputForm />
    </div>
  );
}

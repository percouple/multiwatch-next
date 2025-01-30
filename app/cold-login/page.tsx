import React from "react";
import InputForm from "../clocks/[userId]/components/auth-common/AuthForm";
import Link from "next/link";

export default function Login({ params }) {
  return (
    <div className="absolute w-full h-screen">
      <div
        className="absolute inset-0 cursor-default bg-skin-backgroundBase
        bg-opacity-40 z-1"
      ></div>
      <div
        className="flex flex-col justify-around items-center p-4 pt-6 
        w-72 h-auto absolute rounded-lg border-4 border-skin-accent-1 top-1/4 
        left-1/2 transform -translate-x-1/2 z-20 bg-skin-backgroundMuted"
        id="authForm"
      >
        <div className="text-skin-accent-2 text-4xl font-bold mb-4">
          Hello!</div>
        <div className="" >Welcome to Multiwatch!</div>
        <div className="mb-4">please sign in or</div>
        <Link
          className="underline cursor-pointer mb-8"
          href="/create-account"
        >
          create an account
        </Link>
        <InputForm type={"login"} />
      </div>
    </div>
  );
}

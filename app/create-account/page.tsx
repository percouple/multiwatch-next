"use client";

import Link from "next/link";
import LoginForm from "../clocks/[userId]/components/auth-common/AuthForm";

export default function CreateNewUserCard({}) {
  return (
    <div className="absolute w-full h-screen">
      <div
        className="absolute inset-0 bg-skin-backgroundBase
        cursor-default bg-opacity-40 z-10"
      ></div>
      <div
        className="flex flex-col justify-around items-center p-4 pt-6 
        w-72 h-auto absolute rounded-lg border-4 border-skin-accent-1 top-1/4 
        left-1/2 transform -translate-x-1/2 bg-skin-base z-20 bg-skin-backgroundMuted"
        id="authForm"
      >
        <h1 className="text-skin-accent-2 text-4xl font-bold mb-4">
          Create Account
        </h1>
        <LoginForm type={"create user"} />
        <div className="flex flex-col justify-center items-center text-sm cursor-pointer 
        mx-4 text-skin-textMuted">
          I already have an account,
          <Link
            className="underline text-sm cursor-pointer mx-4 text-skin-textMuted 
        hover:text-skin-textBase "
            href={"/cold-login"}
          >
            {" "}
            take me to login
          </Link>
        </div>
      </div>
    </div>
  );
}

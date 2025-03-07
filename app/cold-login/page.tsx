import React from "react";
import InputForm from "../clocks/[userId]/[theme]/components/auth-common/AuthForm";
import Link from "next/link";

export default function Login({}) {
  return (
    <div className="absolute w-full h-screen">
      <div
        className="absolute inset-0 cursor-default bg-skin-backgroundBase
        bg-opacity-40 z-1"
      ></div>
      <div
        className="flex flex-col justify-around p-4 pt-6 
        w-72 h-auto absolute rounded-lg border-4 border-skin-accent-1 top-1/4 
        left-1/2 transform -translate-x-1/2 z-20 bg-skin-backgroundMuted
        shadow-2xl"
        id="authForm"
      >
        <div className="text-skin-accent-2 text-4xl font-bold my-4">Hello!</div>
        <div className="text-lg text-skin-textBase">Welcome to Multiwatch!</div>
        <div className="text-skin-backgroundBase font-bold my-4 ">
          An app to help you track your habits.
        </div>
        <InputForm type={"login"} />
        <div className="flex flex-col text-center justify-center items-center mb-4">
          or
          <Link
            className="flex justify-center underline cursor-pointer 
            text-skin-textBase rounded-md p-2 mt-4 bg-skin-backgroundBase 
            w-48 duration-300 transition-all hover:bg-skin-accent-2 
            hover:transition-transform hover:scale-105"
            href="/create-account"
          >
            Create an account
          </Link>
        </div>
      </div>
    </div>
  );
}

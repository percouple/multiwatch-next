import React from "react";
import InputForm from "../clocks/[userId]/[theme]/components/auth-common/AuthForm";
import "./deviceStyles.css";
import Link from "next/link";

export default function Login({}) {
  return (
    <div className="absolute w-full h-screen flex justify-center theme-light">
      <div
        className="absolute inset-0 cursor-default bg-skin-backgroundBase
        bg-opacity-40 z-1"
      ></div>
      <div
        className="flex ds-card border-skin-accent-1 pt-6 w-auto m-8 h-auto absolute rounded-lg 
        border-4 top-[15%] bg-skin-backgroundMuted shadow-2xl"
        id="authForm"
      >
        <div>
          <div className="text-skin-accent-2 text-4xl font-bold my-4">
            Hello!
          </div>
          <div className="text-lg text-skin-textBase">
            Welcome to Multiwatch!
          </div>
          <div className="text-skin-textMuted font-bold my-4 ">
            An app to help you track your habits.
          </div>
        <div className="text-skin-accent-2 text-4xl font-bold my-4">Hello!</div>
        <div className="text-lg text-skin-textBase">Welcome to Multiwatch!</div>
        <div className="text-skin-textMuted font-bold my-4 ">
          An app to help you track your habits.
        </div>
        <div className="ds-form">
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
    </div>
  );
}

'use client'

import { useState } from "react";

export default function UserSubmittedURLForm() {

  let [dbValue, setDBValue] = useState('');

  const changeHandler = (e) => {
    setDBValue(e.target.value);
  }
  return (
    <>
      <div className="absolute w-full h-screen theme-cliffs">
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
            Hi there -
          </h1>
          {/* <LoginForm type={"create user"} /> */}
          <div
            className="flex flex-col justify-center items-center text-sm cursor-pointer 
          mx-4 text-skin-textMuted"
          >
            Unfortunately, this instance of Multiwatch is not pointed to an
            appropriate backend server. Please submit a valid backend below.
            {/* <Link
              className="underline text-sm cursor-pointer mx-4 text-skin-textMuted 
            hover:text-skin-textBase "
              href={"/cold-login"}
            >
              {" "}
              take me to login
            </Link> */}
          </div>
          <form className="flex flex-col items-center m-4">
            <input
              placeholder="Database IP or URL"
              className="h-10 w-full px-2 mb-2 rounded bg-skin-backgroundBase
              border-2 outline-none border-skin-accent-1 text-skin-accent-2
              placeholder:text-skin-textMuted"
              value={dbValue}
              type="text"
              name="username"
              onChange={changeHandler}
            />
            <button type="submit" className="relative rounded-md w-48 h-10 bg-skin-backgroundBase
              font-bold z-0 duration-300 transition-all text-skin-textBase hover:bg-skin-accent-2 
              hover:transition-transform hover:scale-105 border-none">
              Submit
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

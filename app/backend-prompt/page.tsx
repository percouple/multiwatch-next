"use client";

import { useState } from "react";
import { pingServer } from "../../http_helpers";
import { useRouter } from "next/navigation";
import { error } from "console";

export default function UserSubmittedURLForm() {
  let [dbValue, setDBValue] = useState("");
  // let [errorMessage, setErrorMessage] = useState('')
  const router = useRouter();

  const changeHandler = (e) => {
    setDBValue(e.target.value);
  };

  const submitHandler = async (e) => {
    e.preventDefault(); // Prevent default form behavior if needed
    console.log(`Testing Server: ${dbValue}`);

    // Ping storage db
    await pingServer(dbValue)
      .then((result) => {
        console.log(result);
        // result.status: 404, result.statusText: "Not Found"
        if (result.ok === false) {
          throw Error(`Server responded with status ${result.status}: ${result.statusText}`);
        }

        // Store dbValue in localStorage
        localStorage.setItem("dbValue", JSON.stringify(dbValue));

        // Redirect user to appropriate server
        router.push('./cold-login')
      })
      .catch((err) => {
        // if ping returns negative, print error message
        console.log(err.message || err);
      });
  };

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
            Welcome!
          </h1>
          {/* <LoginForm type={"create user"} /> */}
          <div
            className="flex flex-col justify-center items-center text-sm cursor-pointer 
          mx-4 text-skin-textBase"
          >
            Unfortunately, this instance of Multiwatch is having issues
            connecting to the backend server. Please enter the expected backend
            IP or URL below.
            {/* <Link
              className="underline text-sm cursor-pointer mx-4 text-skin-textMuted 
            hover:text-skin-textBase "
              href={"/cold-login"}
            >
              {" "}
              take me to login
            </Link> */}
          </div>
          <form
            className="flex flex-col items-center m-4"
            onSubmit={submitHandler}
          >
            <input
              placeholder="Database IP or URL"
              className="h-10 w-full px-2 mb-2 rounded bg-skin-backgroundBase
              border-2 outline-none border-skin-accent-1 text-skin-accent-2
              placeholder:text-skin-textMuted"
              value={dbValue}
              type="text"
              name="dbValue"
              onChange={changeHandler}
            />
            <button
              type="submit"
              title="Submit backend database information"
              className="relative rounded-md w-48 h-10 bg-skin-backgroundBase
              font-bold z-0 duration-300 transition-all text-skin-textBase hover:bg-skin-accent-2 
              hover:transition-transform hover:scale-105 border-none"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

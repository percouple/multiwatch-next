"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { authenticateUser } from "../../../lib/db-helpers";
import ErrorMessage from "../components/AuthErrorMessage";

export default function InputForm(props) {
  let [userValues, setUserValues] = useState({ username: "", password: "" });
  let [disabledSubmit, setDisabledSubmit] = useState(true);
  let [errorMessage, setErrorMessage] = useState("");

  const router = useRouter();

  const submitHandler = async (e) => {
    e.preventDefault();
    const user = await authenticateUser(userValues);
    if (!user) {
      setErrorMessage("Username or password incorrect");
      return
    } else {
      router.push(`/clocks/${user.id}`);
    }
  };

  const changeHandler = (e) => {
    const { name, value } = e.target;
    setUserValues({ ...userValues, [name]: value });
    if (!userValues.password || !userValues.username) {
      setDisabledSubmit(true);
    } else {
      setDisabledSubmit(false);
    }
  };

  return (
    <form className="flex flex-col items-center" onSubmit={submitHandler}>
      <input
        value={userValues.username}
        type="text"
        placeholder="username"
        name="username"
        onChange={changeHandler}
        className="h-10 w-48 px-2 mb-2 rounded border-accent-2 border-2 outline-none bg-transparent placeholder:text-accent-2"
      />
      <input
        value={userValues.password}
        type="password"
        name="password"
        placeholder="password"
        onChange={changeHandler}
        className="h-10 w-48 px-2 mb-2 rounded border-accent-2 border-2 outline-none bg-transparent placeholder:text-accent-2"
      />
      <button
        id="createUserButton"
        className={`rounded-lg w-48 h-10 m-4 bg-accent-2 font-bold text-bkg`}
        disabled={disabledSubmit}
      >Sign In</button>
      {errorMessage && <ErrorMessage message={errorMessage} />}
    </form>
  );
}

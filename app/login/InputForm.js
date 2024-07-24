"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import SubmitButton from "../clocks/[userId]/components/state-cards/common-elements/SubmitButton";
import ErrorMessage from "../clocks/[userId]/components/state-cards/common-elements/AuthErrorMessage";

export default function InputForm(props) {
  let [userValues, setUserValues] = useState({ username: "", password: "" });
  let [disabledSubmit, setDisabledSubmit] = useState(true);
  let [errorMessage, setErrorMessage] = useState("Error Message");

  const router = useRouter();

  const submitHandler = (e) => {
    e.preventDefault();
    router.push("/");
  };

  const changeHandler = (e) => {
    const { name, value } = e.target;
    setUserValues({ ...userValues, [name]: value });
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
      <SubmitButton disabled={disabledSubmit} textContent="Sign In" />
      {errorMessage && <ErrorMessage message={errorMessage} />}
    </form>
  );
}

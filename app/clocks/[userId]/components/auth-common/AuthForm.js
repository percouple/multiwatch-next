"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { authenticateUser, createNewUser } from "../../../../../http_helpers";
import ErrorMessage from "./AuthErrorMessage";
import * as yup from "yup";

export default function InputForm({ type }) {
  let [userValues, setUserValues] = useState({ username: "", password: "" });
  let [disabledSubmit, setDisabledSubmit] = useState(true);
  let [errorMessage, setErrorMessage] = useState("");

  // Validation schema for 'create user' type
  const schema = yup.object().shape({
    password: yup
      .string()
      .trim()
      .min(8, "Password must be at least 8 characters long")
      .matches(
        /[!@#$%^&*.()/?]/,
        'Password must contain at least one special character: "!@#$%^&*.()"'
      )
      .matches(/\d/, "Password must contain at least one digit")
      .matches(/[a-z]/, "Password must contain at least one lowercase letter")
      .matches(/[A-Z]/, "Password must contain at least one uppercase letter")
      .required("Missing password"),
    username: yup
      .string()
      .trim()
      .min(3, "Username must be at least three characters")
      .required("Missing username"),
  });

  // Instantiate Router for next handling
  const router = useRouter();

  // Handle db update for both login and create user
  const submitHandler = async (e) => {
    e.preventDefault();
    console.log(type)
    if (type == "create user") {
      const result = await createNewUser(userValues);
      console.log("RESULT: ", result)
      if (result.user) {
        router.push(`/clocks/${result.user.id}`);
      } else {
        setErrorMessage(result.message);
      }
    } else if (type === 'login') {
      const user = await authenticateUser(userValues);
      if (!user.user) {
        setErrorMessage("Username or password incorrect");
        return;
      } else {
        router.push(`/clocks/${user.user.id}`);
      }
    }
  };

  // Handle for user entry into the input fields
  const changeHandler = (e) => {
    const { name, value } = e.target;
    setUserValues({ ...userValues, [name]: value });
    if (!userValues.password || !userValues.username) {
      setDisabledSubmit(true);
    } else {
      setDisabledSubmit(false);
    }
  };

  // Validate inputs on change IF the type is a create user
  useEffect(() => {
    if (type === "create user") {
      schema
        .validate(userValues)
        .then(() => {
          setDisabledSubmit(false);
          setErrorMessage("");
        })
        .catch((err) => {
          setErrorMessage(err.errors[0]);
          setDisabledSubmit(true);
        });
    }
  }, [userValues, type]);

  // Clear error message on component mount
  useEffect(() => {
    setErrorMessage("");
  }, []);

  return (
    <form className="flex flex-col items-center" onSubmit={submitHandler}>
      <input
        value={userValues.username}
        type="text"
        placeholder="username"
        name="username"
        onChange={changeHandler}
        className="h-10 w-48 px-2 mb-2 rounded border-accent-2 
        border-2 outline-none bg-transparent 
        placeholder:text-accent-2"
      />
      <input
        value={userValues.password}
        type="password"
        name="password"
        placeholder="password"
        onChange={changeHandler}
        className="h-10 w-48 px-2 mb-2 rounded border-accent-2 
        border-2 outline-none bg-transparent 
        placeholder:text-accent-2"
      />
      <button
        id="createUserButton"
        className={`rounded-lg w-48 h-10 m-4 bg-accent-2 
          font-bold text-bkg`}
        disabled={disabledSubmit}
      >
        {type === "login" ? "Sign In" : "Create Account"}
      </button>
      {errorMessage && type === "create user" && (
        <ErrorMessage message={errorMessage} />
      )}
    </form>
  );
}

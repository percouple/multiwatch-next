"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import {
  authenticateUser,
  createNewUser,
} from "../../../../../../http_helpers";
import ErrorMessage from "./AuthErrorMessage";
import * as yup from "yup";
// import { UserSubmittedURLForm } from "./UserSubmittedURLForm";

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

  // Instantiate Router for next routing
  const router = useRouter();

  // Handle db update for both login and create user
  const submitHandler = async (e) => {
    e.preventDefault();
    if (type == "create user") {
      const result = await createNewUser(userValues);
      console.log("RESULT: ", result);
      if (result.user) {
        router.push(`/clocks/${result.user.id}/${result.user.theme_preference}`);
      } else {
        setErrorMessage(result.message);
      }
    } else if (type === "login") {
      const user = await authenticateUser(userValues);
      console.log(user);
      if (!user.user) {
        setErrorMessage("Username or password incorrect");
        return;
      } else {
        router.push(`/clocks/${user.user.id}/${user.user.theme_preference}`);
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
    <form className="flex flex-col m-4" onSubmit={submitHandler}>
      <input
        value={userValues.username}
        type="text"
        placeholder="username"
        name="username"
        onChange={changeHandler}
        className="h-10 w-full px-2 mb-2 rounded bg-skin-backgroundBase
        border-2 outline-none border-skin-accent-1 text-skin-accent-2
        placeholder:text-skin-textMuted"
      />
      <input
        value={userValues.password}
        type="password"
        name="password"
        placeholder="password"
        onChange={changeHandler}
        className={`h-10 w-full px-2 mb-2 rounded border-skin-accent-1
        border-2 outline-none bg-skin-backgroundBase text-skin-accent-2
        placeholder:text-skin-textMuted 
        ${errorMessage && "border-skin-accent-2"}`}
      />
      {errorMessage && type === "login" && (
        <ErrorMessage message={errorMessage} />
      )}
      {/* {type === "create user" && <UserSubmittedURLForm/>} */}
      <div className="flex justify-center mt-4">
        <button
          id="createUserButton"
          className={`relative rounded-md w-48 h-10 bg-skin-backgroundBase
          font-bold z-0 duration-300 transition-all
          ${
            disabledSubmit
              ? "text-skin-textMuted bg-skin-backgroundMuted border-2 border-skin-textMuted"
              : "text-skin-textBase hover:bg-skin-accent-2 hover:transition-transform hover:scale-105 border-none"
          }
          `}
          disabled={false}
        >
          {type === "login" ? "Sign In" : "Create Account"}
        </button>
      </div>
      <div className="mt-4">
        {errorMessage && type === "create user" && (
          <ErrorMessage message={errorMessage} />
        )}
      </div>
    </form>
  );
}

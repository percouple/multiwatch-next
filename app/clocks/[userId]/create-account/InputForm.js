
import { useEffect, useState } from "react";
import ErrorMessage from "../components/state-cards/common-elements/AuthErrorMessage";
import * as yup from "yup";
import { createNewUser } from "../../../lib/db-helpers";
import { useRouter } from "next/navigation";

export default function CreateNewUserCard() {
  let [userValues, setUserValues] = useState({ username: "", password: "" });
  let [disabledSubmit, setDisabledSubmit] = useState(true);
  let [errorMessage, setErrorMessage] = useState("");

  const router = useRouter();

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

  // Handle changing local values on inputs
  const changeHandler = (e) => {
    const { name, value } = e.target;
    setUserValues({ ...userValues, [name]: value });
  };

  // Handle form submission
  const submitHandler = async (e) => {
    e.preventDefault();
    const userId = await createNewUser(userValues);
    if (userId) {
      router.push(`/clocks/${userId}`);
    } else {
      setErrorMessage("Username unavailable");
    }
  };

  // Validate inputs on change
  useEffect(() => {
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
  }, [userValues]);

  // Clear error message on component mount
  useEffect(() => {}, []);

  return (
    <form className="flex flex-col items-center" onSubmit={submitHandler}>
      <input
        value={userValues.username}
        type="text"
        placeholder="username"
        name="username"
        onChange={changeHandler}
        className="h-10 w-48 px-2 mb-2 rounded border-accent-2 border-2 outline-none bg-transparent"
      />
      <input
        value={userValues.password}
        type="password"
        name="password"
        placeholder="password"
        onChange={changeHandler}
        className="h-10 w-48 px-2 mb-2 rounded border-accent-2 border-2 outline-none bg-transparent"
      />
      <button
        id="createUserButton"
        className={`rounded-lg w-48 h-10 m-4 bg-accent-2 font-bold text-bkg`}
        disabled={disabledSubmit}
        type="submit"
      >
        Create Profile
      </button>
      {errorMessage && <ErrorMessage message={errorMessage} />}
    </form>
  );
}

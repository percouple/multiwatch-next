"use client";
import SubmitButton from "../components/state-cards/common-elements/SubmitButton";
import ErrorMessage from "../components/state-cards/common-elements/AuthErrorMessage";

export default function InputForm(props) {
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

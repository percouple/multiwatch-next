import InputForm from "./InputForm";

export default function CreateNewUserCard() {
  return (
    <div className="absolute w-full h-screen">
      <div className="absolute inset-0 bg-neutral-950 bg-opacity-40 z-10"></div>
      <div
        className="flex flex-col justify-around items-center p-2 pt-6 w-72 h-auto absolute rounded-lg border-4 border-accent-1 top-1/4 left-1/3 z-30 bg-bkg"
        id="authForm"
      >
        <h1 className="text-accent-1 text-2xl font-bold mb-10 mt-4">
          Create new user
        </h1>
        <InputForm />
      </div>
    </div>
  );
}

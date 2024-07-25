import InputForm from './InputForm';

export default function CreateNewUserCard() {
  
  return (
    <div
      className="flex flex-col justify-around items-center p-2 pt-6 w-72 h-auto absolute rounded-lg border-4 border-accent-1 top-30% z-30 bg-bkg"
      id="authForm"
    >
      <h1 className="text-accent-1 text-2xl font-bold mb-10 mt-4">
        Create new user
      </h1>
      <InputForm />
    </div>
  );
}

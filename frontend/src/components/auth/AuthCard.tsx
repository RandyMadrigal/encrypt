import { AuthForm } from "./AuthForm";
import { AuthHeader } from "./AuthHeader";

export const AuthCard = () => {
  return (
    <div className="flex flex-row justify-center items-center ">
      <AuthHeader />
      <AuthForm />
    </div>
  );
};

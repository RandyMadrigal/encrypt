import { AuthForm } from "./AuthForm";
import { AuthHeader } from "./AuthHeader";

export const AuthCard = () => {
  return (
    <div className="flex flex-col justify-center items-center md:flex-row">
      <AuthHeader />
      <AuthForm />
    </div>
  );
};

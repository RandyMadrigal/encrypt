import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

export const Container = ({ children }: Props) => {
  return (
    <div className="flex flex-col justify-center items-center h-screen bg-gray-800">
      {children}
    </div>
  );
};

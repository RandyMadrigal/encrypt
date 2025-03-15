import { ReactNode } from "react";
import { Toaster } from "react-hot-toast";

interface Props {
  children: ReactNode;
}

export const Container = ({ children }: Props) => {
  return (
    <div className="flex flex-col justify-center items-center h-screen bg-gray-800">
      {children}
      <Toaster
        position="top-center"
        reverseOrder={false}
        toastOptions={{
          className: "mt-24",
          success: { duration: 1000 },
          error: { duration: 1000 },
        }}
      />
    </div>
  );
};

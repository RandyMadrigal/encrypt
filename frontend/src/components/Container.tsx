import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

export const Container = ({ children }: Props) => {
  return (
    <div className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-[#0f172a] via-[#020617] to-black overflow-hidden">
      {/* Glow effect */}
      <div
        className="
          absolute
          w-[300px] h-[300px]
          bg-blue-500
          opacity-20
          blur-3xl
          rounded-full
          top-10
        "
      />

      {/* Contenido REAL */}
      <div className="relative z-10 w-full flex justify-center px-4">
        {children}
      </div>
    </div>
  );
};

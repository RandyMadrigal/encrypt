import { ReactNode } from "react";
import { Footer } from "./footer/Footer";

interface Props {
  children: ReactNode;
}

export const Container = ({ children }: Props) => {
  return (
    <div className="relative min-h-screen p-8 flex flex-col bg-gradient-to-br from-[#0f172a] via-[#020617] to-black overflow-hidden">
      {/* Glow */}
      <div className="absolute w-[300px] h-[300px] bg-blue-500 opacity-20 blur-3xl rounded-full top-10" />

      {/* Contenido */}
      <div className="relative z-10 flex-1 flex items-center justify-center px-4">
        {children}
      </div>

      {/* Footer */}
      <div className="relative z-10 pb-6">
        <Footer />
      </div>
    </div>
  );
};

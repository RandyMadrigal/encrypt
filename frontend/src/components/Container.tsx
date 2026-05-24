import { ReactNode } from "react";
import { Footer } from "./footer/Footer";

interface Props {
  children: ReactNode;
}

export const Container = ({ children }: Props) => {
  return (
    <div
      className="relative min-h-dvh flex flex-col"
      style={{ backgroundColor: "var(--bg-primary)" }}
    >
      {/* Dot grid */}
      <div className="bg-grid absolute inset-0 pointer-events-none" />

      {/* Gradient orbs */}
      <div className="absolute top-[-180px] left-[-80px] w-[500px] h-[500px] rounded-full bg-blue-600/[0.07] blur-[140px] pointer-events-none" />
      <div className="absolute top-[25%] right-[-120px] w-[420px] h-[420px] rounded-full bg-purple-600/[0.07] blur-[140px] pointer-events-none" />
      <div className="absolute bottom-[-100px] left-[35%] w-[350px] h-[350px] rounded-full bg-cyan-500/[0.06] blur-[120px] pointer-events-none" />

      {/* Content — pt-20 reserves space for fixed navbar (h-16) */}
      <main className="relative z-10 flex-1 flex items-center justify-center px-4 pt-24 pb-8">
        {children}
      </main>

      <div className="relative z-10">
        <Footer />
      </div>
    </div>
  );
};

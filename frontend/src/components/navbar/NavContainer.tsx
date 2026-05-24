import { Link } from "react-router-dom";
import { HiOutlineLockClosed } from "react-icons/hi2";

export const NavContainer = () => {
  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 h-16 flex items-center"
      style={{
        background: "rgba(5, 8, 22, 0.75)",
        backdropFilter: "blur(20px)",
        WebkitBackdropFilter: "blur(20px)",
        borderBottom: "1px solid rgba(255,255,255,0.05)",
      }}
    >
      <div className="w-full max-w-6xl mx-auto px-6 flex items-center justify-between">
        <div className="flex items-center gap-2.5">
          <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center shadow-lg shadow-cyan-500/20">
            <HiOutlineLockClosed className="w-3.5 h-3.5 text-white" aria-hidden="true" />
          </div>
          <span className="text-white font-semibold text-sm tracking-tight">
            Encrypt<span className="text-cyan-400">.</span>
          </span>
        </div>

        <ul className="flex items-center gap-1" role="list">
          <li>
            <Link
              className="lenguaje px-3 py-1.5 rounded-md hover:bg-white/[0.06] transition-colors duration-150 cursor-pointer"
              to="/"
            >
              Encrypt
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

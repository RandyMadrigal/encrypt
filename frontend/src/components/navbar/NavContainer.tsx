import { Link } from "react-router-dom";
import { HiOutlineLockClosed, HiOutlineSun, HiOutlineMoon } from "react-icons/hi2";
import { useTheme } from "../../hooks/useTheme";

export const NavContainer = () => {
  const { theme, toggle } = useTheme();

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 h-16 flex items-center"
      style={{
        background: "var(--nav-bg)",
        backdropFilter: "blur(20px)",
        WebkitBackdropFilter: "blur(20px)",
        borderBottom: "1px solid var(--nav-border)",
      }}
    >
      <div className="w-full max-w-6xl mx-auto px-6 flex items-center justify-between">
        <div className="flex items-center gap-2.5">
          <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center shadow-lg shadow-cyan-500/20">
            <HiOutlineLockClosed className="w-3.5 h-3.5 text-white" aria-hidden="true" />
          </div>
          <span className="font-semibold text-sm tracking-tight" style={{ color: "var(--text-1)" }}>
            Encrypt<span className="text-cyan-400">.</span>
          </span>
        </div>

        <div className="flex items-center gap-2">
          <ul className="flex items-center gap-1" role="list">
            <li>
              <Link
                className="lenguaje px-3 py-1.5 rounded-md transition-colors duration-150 cursor-pointer hover:bg-black/[0.05] dark:hover:bg-white/[0.06]"
                to="/"
              >
                Encrypt
              </Link>
            </li>
          </ul>

          <button
            onClick={toggle}
            className="w-8 h-8 flex items-center justify-center rounded-lg cursor-pointer transition-colors duration-150"
            style={{
              background: "var(--bg-subtle)",
              border: "1px solid var(--border-sm)",
              color: "var(--text-2)",
            }}
            aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
          >
            {theme === "dark" ? (
              <HiOutlineSun className="w-4 h-4" aria-hidden="true" />
            ) : (
              <HiOutlineMoon className="w-4 h-4" aria-hidden="true" />
            )}
          </button>
        </div>
      </div>
    </nav>
  );
};

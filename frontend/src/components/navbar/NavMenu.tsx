import { Link } from "react-router-dom";

export const NavMenu = () => {
  return (
    <ul className="flex items-center gap-1">
      <li>
        <Link
          className="lenguaje px-3 py-1.5 rounded-md hover:bg-white/[0.06] transition-colors duration-150 cursor-pointer"
          to="/"
        >
          Encrypt
        </Link>
      </li>
    </ul>
  );
};

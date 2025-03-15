import { Link } from "react-router-dom";
export const NavMenu = () => {
  return (
    <div>
      <ul className="flex flex-row">
        <li>
          <Link className="lenguaje" to="encrypt">
            Encrypt
          </Link>
        </li>
      </ul>
    </div>
  );
};

import { Link } from "react-router-dom";
export const NavMenu = () => {
  return (
    <div>
      <ul className="flex flex-row">
        <li>
          <Link className="lenguaje" to="/">
            Encrypt
          </Link>
        </li>
      </ul>
    </div>
  );
};

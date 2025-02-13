import { Link } from "react-router-dom";
export const NavMenu = () => {
  return (
    <div>
      <ul className="flex flex-row font-bold">
        <li>
          <a
            href="#"
            className="px-5 text-white  hover:text-blue-700 hover:uppercase"
          >
            <Link to="encrypt">Encrypt</Link>
          </a>
        </li>
      </ul>
    </div>
  );
};

import { NavLogin } from "./NavLogin";
import { NavMenu } from "./NavMenu";

export const NavContainer = () => {
  return (
    <nav className=" bg-gray-900 flex flex-col fixed top-0 w-full">
      <div className="w-11/12 flex flex-wrap items-center justify-between mx-auto p-4 ">
        <NavMenu />
        <div>
          <NavLogin />
        </div>
      </div>
    </nav>
  );
};

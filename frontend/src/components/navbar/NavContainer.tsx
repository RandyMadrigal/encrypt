import { NavLogin } from "./NavLogin";
import { NavMenu } from "./NavMenu";

export const NavContainer = () => {
  return (
    <nav className=" flex flex-col bg-gray-900  fixed top-0 w-full">
      <div className="flex flex-row justify-center items-center mx-auto p-4 gap-5 md:justify-between md:w-11/12">
        <NavMenu />
        <div>
          <NavLogin />
        </div>
      </div>
    </nav>
  );
};

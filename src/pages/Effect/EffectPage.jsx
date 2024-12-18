import { NavLink, Outlet } from "react-router-dom";

function EffectPage() {
  return (
    <div>
      <nav className="w-full">
        <ul className="flex flex-row gap-5 mt-5">
          <li className=" bg-blue-300 text-white-300 rounded-lg shadow-2xl">
            <NavLink
              to="/effect/fetch"
              className="bg-white-100 pl-5 pr-5 pt-2 pb-2 block">
              fetch
            </NavLink>
          </li>
          <li className=" bg-blue-300 text-white-300 rounded-lg shadow-2xl">
            <NavLink
              to="/effect/input"
              className="bg-white-100 pl-5 pr-5 pt-2 pb-2 block ">
              input
            </NavLink>
          </li>
        </ul>
      </nav>
      <Outlet />
    </div>
  );
}

export default EffectPage;

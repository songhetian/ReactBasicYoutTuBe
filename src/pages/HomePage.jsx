import { NavLink, Outlet } from "react-router-dom";
import "../assets/style.css";
import PropTypes from "prop-types";
HomePage.propTypes = {
  title: PropTypes.string.isRequired,
};

function HomePage() {
  return (
    <div className="w-full h-screen bg-gray-100">
      <main className="grid grid-cols-[250px_1fr] gap-2 h-screen ">
        <nav className="bg-gray-200 p-5 mr-2">
          <ul className="flex flex-col gap-5 items-start justify-center">
            <li className="w-full bg-yellow-300  hover:text-blue-500  text-gray-500 text-xl rounded-lg shadow-md p-3 flex justify-center items-center">
              <NavLink to="/">首页</NavLink>
            </li>
            <li className="w-full bg-yellow-300  hover:text-blue-500  text-gray-500 text-xl rounded-lg shadow-md p-3 flex justify-center items-center">
              <NavLink to="/reducer">Reducer</NavLink>
            </li>
            <li className="w-full bg-yellow-300  hover:text-blue-500  text-gray-500 text-xl rounded-lg shadow-md p-3 flex justify-center items-center">
              <NavLink to="/context">Context</NavLink>
            </li>
            <li className="w-full bg-yellow-300  hover:text-blue-500  text-gray-500 text-xl rounded-lg shadow-md p-3 flex justify-center items-center">
              <NavLink to="/toolkit/list">Toolkit</NavLink>
            </li>
            <li className="w-full bg-yellow-300  hover:text-blue-500  text-gray-500 text-xl rounded-lg shadow-md p-3 flex justify-center items-center">
              <NavLink to="/effect">Effect</NavLink>
            </li>
            <li className="w-full bg-yellow-300  hover:text-blue-500  text-gray-500 text-xl rounded-lg shadow-md p-3 flex justify-center items-center">
              <NavLink to="/hook-form">HookForm</NavLink>
            </li>
            <li className="w-full bg-yellow-300  hover:text-blue-500  text-gray-500 text-xl rounded-lg shadow-md p-3 flex justify-center items-center">
              <NavLink to="/react-query">ReactQuery</NavLink>
            </li>
          </ul>
        </nav>
        <Outlet />
      </main>
    </div>
  );
}

export default HomePage;

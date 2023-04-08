import { Link, NavLink, useLocation } from "react-router-dom";

export const Navbar = () => {
  const location = useLocation();

  return (
    <>
      <nav className="h-40 sm:h-20 bg-slate-900 flex flex-col sm:flex-row justify-center sm:justify-between items-center gap-5 px-20 text-yellow-50">
        <Link to="/" className="text-2xl font-extrabold text-center">
          APP HEROES
        </Link>
        <div className="flex items-center gap-4 uppercase font-semibold">
          <NavLink
            className={`${
              location.pathname === "/marvel" ? "text-indigo-200 font-bold" : ""
            } `}
            to="/marvel"
          >
            Marvel
          </NavLink>
          <NavLink
            className={`${
              location.pathname === "/dc" ? "text-indigo-200 font-bold" : ""
            } `}
            to="/dc"
          >
            DC
          </NavLink>
          <NavLink
            className={`${
              location.pathname === "/search" ? "text-indigo-200 font-bold" : ""
            } bg-indigo-500 px-5 py-2 rounded-lg hover:bg-indigo-700 transition-all duration-300`}
            to="/search"
          >
            Buscar
          </NavLink>
        </div>
      </nav>
    </>
  );
};

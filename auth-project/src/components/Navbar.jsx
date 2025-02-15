import { NavLink } from "react-router-dom";
import { useAuth } from "../providers/AuthProvider";

const Navbar = () => {
  const { user, logout } = useAuth();

  return (
    <div className="navbar bg-base-100 shadow-sm px-4">
      <div className="flex-1">
        <NavLink to="/" className="text-xl">
          Auth Project
        </NavLink>
      </div>

      <div className="flex gap-4 px-4">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? "text-blue-500 font-bold" : "text-gray-700"
          }>
          Home
        </NavLink>

        {user ? (
          <>
            <span className="text-gray-700">{user.email}</span>
            <button onClick={logout} className="btn btn-sm btn-neutral">
              Logout
            </button>
          </>
        ) : (
          <>
            <NavLink
              to="/login"
              className={({ isActive }) =>
                isActive ? "text-blue-500 font-bold" : "text-gray-700"
              }>
              Login
            </NavLink>
            <NavLink
              to="/register"
              className={({ isActive }) =>
                isActive ? "text-blue-500 font-bold" : "text-gray-700"
              }>
              Register
            </NavLink>
          </>
        )}
      </div>
    </div>
  );
};

export default Navbar;

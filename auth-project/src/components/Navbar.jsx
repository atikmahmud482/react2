import { NavLink } from "react-router-dom";
import { useAuth } from "../providers/AuthProvider";

const Navbar = () => {
  const { user, logout } = useAuth();

  return (
    <div className="navbar bg-base-100 shadow-sm px-4">
      <div className="flex-1">
        <a className="btn btn-ghost text-xl">Auth Project</a>
      </div>

      <div className="flex gap-4 px-4">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? "text-blue-500 font-bold" : "text-gray-700"
          }>
          Home
        </NavLink>

        {!user ? (
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
        ) : (
          <div className="flex items-center gap-2">
            <span className="text-green-500 font-bold">{user.email}</span>{" "}
            {/* Show User Email */}
            <button onClick={logout} className="btn btn-error">
              Logout
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;

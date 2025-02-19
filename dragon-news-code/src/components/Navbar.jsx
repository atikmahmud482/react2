import { Link } from "react-router-dom";
import userIcon from "../assets/user.png";
import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";

const Navbar = () => {
  const { user, logout } = useContext(AuthContext);

  const handleLogout = () => {
    logout();
  };

  return (
    <div className="flex justify-between items-center p-4 bg-gray-200">
      {/* Logo or Brand */}
      <div className="text-xl font-bold">MyApp</div>

      {/* Navigation Links */}
      <div className="nav space-x-5">
        <Link to="/">Home</Link>
        <Link to="/career">Career</Link>
        <Link to="/about">About</Link>
      </div>

      {/* User Section */}
      <div className="flex items-center space-x-4">
        {user ? (
          <>
            {/* Show User Name */}
            <span className="text-lg font-semibold">
              {user.displayName || "User"}
            </span>

            <img
              src={user.photoURL || userIcon}
              alt="User"
              className="w-10 h-10 rounded-full border"
            />

            <button
              onClick={handleLogout}
              className="btn bg-red-500 text-white px-4 py-2 rounded">
              Logout
            </button>
          </>
        ) : (
          <Link
            to="/auth/login"
            className="btn bg-blue-500 text-white px-4 py-2 rounded">
            Login
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;

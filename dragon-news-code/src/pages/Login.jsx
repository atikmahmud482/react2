/* eslint-disable react/no-unescaped-entities */
import { useState, useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword, getAuth } from "firebase/auth";
import app from "../firebase/firebase.config";

const auth = getAuth(app);

const Login = () => {
  const { setUser } = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      setUser(userCredential.user);
      setSuccess("Login successful! Redirecting...");
      setTimeout(() => navigate("/"), 2000); // Redirect after 2 seconds
    } catch (error) {
      if (error.code === "auth/user-not-found") {
        setError("No account found with this email. Please register.");
      } else if (error.code === "auth/wrong-password") {
        setError("Incorrect password. Please try again.");
      } else {
        setError(error.message);
      }
    }
  };

  return (
    <div className="bg-white text-black min-h-screen flex flex-col justify-start">
      {/* Login Form */}
      <div className="card bg-white text-black w-full max-w-lg shrink-0 shadow-2xl p-6 mx-auto mt-3">
        <form onSubmit={handleSubmit} className="card-body space-y-4">
          <h1 className="text-4xl font-bold mb-2">Login now!</h1>

          {/* Display Error Message */}
          {error && <p className="text-red-500 text-sm">{error}</p>}

          {/* Display Success Message */}
          {success && <p className="text-green-500 text-sm">{success}</p>}

          <fieldset className="mb-3">
            <label className="text-lg text-black">Email</label>
            <input
              type="email"
              className="input bg-white text-black border border-gray-300 p-2 w-full mt-1"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </fieldset>
          <fieldset className="mb-3">
            <label className="text-lg text-black">Password</label>
            <input
              type="password"
              className="input bg-white text-black border border-gray-300 p-2 w-full mt-1"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </fieldset>
          <div className="text-left">
            <a className="link link-hover text-sm">Forgot password?</a>
          </div>
          <button type="submit" className="btn btn-neutral mt-4 w-full">
            Login
          </button>
        </form>

        {/* Register Link Below Form */}
        <div className="mt-4 text-center">
          <p className="text-sm">
            Don't have an account?{" "}
            <a href="/auth/register" className="text-blue-500 hover:underline">
              Register here
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;

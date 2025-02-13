import {
  signInWithEmailAndPassword,
  sendPasswordResetEmail,
} from "firebase/auth";
import { auth } from "../firebase.init";
import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link } from "react-router-dom";

const Login = () => {
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [resetEmailSent, setResetEmailSent] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.pass.value;

    setErrorMessage("");
    setSuccessMessage("");

    signInWithEmailAndPassword(auth, email, password)
      .then((result) => {
        console.log(result.user);
        setSuccessMessage("Login successful!");
      })
      .catch((error) => {
        console.log("Error", error.message);
        setErrorMessage(error.message);
      });
  };

  // Handle Password Reset
  const handleForgotPassword = async () => {
    const email = prompt("Enter your email to reset your password:");
    if (!email) return; // Exit if no email is entered

    try {
      await sendPasswordResetEmail(auth, email);
      setResetEmailSent(true);
      setSuccessMessage("Password reset email sent! Check your inbox.");
    } catch (error) {
      console.error("Error:", error.message);
      setErrorMessage(error.message);
    }
  };

  return (
    <div>
      <form onSubmit={handleLogin}>
        <div className="hero bg-base-200 min-h-screen">
          <div className="hero-content flex-col lg:flex-row-reverse">
            <div className="text-center lg:text-left">
              <h1 className="text-5xl font-bold">Login now!</h1>
              <p className="py-6">
                Securely log in to your account. If you forgot your password,
                you can reset it below.
              </p>
            </div>
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
              <div className="card-body">
                <fieldset className="fieldset">
                  {/* Email Input */}
                  <label htmlFor="email" className="fieldset-label">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="input input-bordered w-full"
                    placeholder="Email"
                    required
                  />

                  {/* Password Input */}
                  <label htmlFor="password" className="fieldset-label">
                    Password
                  </label>
                  <div className="relative">
                    <input
                      type={showPassword ? "text" : "password"}
                      id="password"
                      name="pass"
                      className="input input-bordered w-full pr-10"
                      placeholder="Password"
                      required
                    />
                    <button
                      type="button"
                      className="absolute inset-y-0 right-0 flex items-center px-3 focus:outline-none"
                      onClick={() => setShowPassword(!showPassword)}>
                      {showPassword ? (
                        <FaEyeSlash className="h-5 w-5 text-gray-500" />
                      ) : (
                        <FaEye className="h-5 w-5 text-gray-500" />
                      )}
                    </button>
                  </div>

                  {/* Forgot Password Button */}
                  <div className="mt-2">
                    <button
                      type="button"
                      className="link link-hover text-blue-500"
                      onClick={handleForgotPassword}>
                      Forgot password?
                    </button>
                  </div>

                  {/* Login Button */}
                  <button type="submit" className="btn btn-neutral mt-4 w-full">
                    Login
                  </button>

                  {/* Sign-Up Link */}
                  <div className="mt-4 text-center">
                    <p>
                      Don't have an account?{" "}
                      <Link to="/signup" className="link link-primary">
                        Sign Up
                      </Link>
                    </p>
                  </div>

                  {/* Success Message Display */}
                  {successMessage && (
                    <div className="mt-4 text-center">
                      <p className="text-green-600">{successMessage}</p>
                    </div>
                  )}

                  {/* Error Message Display */}
                  {errorMessage && (
                    <div className="mt-4 text-center">
                      <p className="text-red-600">{errorMessage}</p>
                    </div>
                  )}
                </fieldset>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Login;

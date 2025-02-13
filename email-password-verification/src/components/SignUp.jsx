import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase.init";
import { useState } from "react";

const SignUp = () => {
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const handleSignUp = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.pass.value;

    // Clear previous messages
    setErrorMessage("");
    setSuccessMessage("");

    createUserWithEmailAndPassword(auth, email, password)
      .then((result) => {
        console.log(result.user); // Successfully signed up
        setSuccessMessage("User created successfully!"); // Set success message
      })
      .catch((error) => {
        console.log("Error", error.message); // Corrected typo: error.message
        setErrorMessage(error.message); // Set error message for display
      });
  };

  return (
    <div>
      <form onSubmit={handleSignUp}>
        <div className="hero bg-base-200 min-h-screen">
          <div className="hero-content flex-col lg:flex-row-reverse">
            <div className="text-center lg:text-left">
              <h1 className="text-5xl font-bold">Sign Up now!</h1>
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
                  <input
                    type="password"
                    id="password"
                    name="pass"
                    className="input input-bordered w-full"
                    placeholder="Password"
                    required
                  />

                  {/* Forgot Password Link */}
                  <div className="mt-2">
                    <a className="link link-hover">Forgot password?</a>
                  </div>

                  {/* Sign Up Button */}
                  <button type="submit" className="btn btn-neutral mt-4 w-full">
                    Sign Up
                  </button>

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

export default SignUp;

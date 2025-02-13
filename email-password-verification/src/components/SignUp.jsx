import {
  createUserWithEmailAndPassword,
  sendEmailVerification,
} from "firebase/auth";
import { auth } from "../firebase.init";
import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa"; // Import eye icons

const SignUp = () => {
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [showPassword, setShowPassword] = useState(false); // State to toggle password visibility
  const [agreeToTerms, setAgreeToTerms] = useState(false); // State for Terms and Conditions checkbox

  const handleSignUp = async (e) => {
    e.preventDefault();

    if (!agreeToTerms) {
      setErrorMessage("You must agree to the Terms and Conditions.");
      return;
    }

    const email = e.target.email.value;
    const password = e.target.pass.value;

    setErrorMessage("");
    setSuccessMessage("");

    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;

      // Send email verification
      await sendEmailVerification(user);
      setSuccessMessage(
        "User created successfully! Please check your email to verify your account."
      );
    } catch (error) {
      console.error("Error", error.message);
      setErrorMessage(error.message);
    }
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
                  <div className="relative">
                    <input
                      type={showPassword ? "text" : "password"}
                      id="password"
                      name="pass"
                      pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
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

                  {/* Terms and Conditions Checkbox */}
                  <div className="mt-4 flex items-center">
                    <input
                      type="checkbox"
                      id="terms"
                      name="terms"
                      className="checkbox checkbox-sm"
                      checked={agreeToTerms}
                      onChange={(e) => setAgreeToTerms(e.target.checked)}
                    />
                    <label htmlFor="terms" className="ml-2 text-sm">
                      I agree to the{" "}
                      <a
                        href="/terms"
                        className="link link-primary"
                        target="_blank"
                        rel="noopener noreferrer">
                        Terms and Conditions
                      </a>
                    </label>
                  </div>

                  {/* Already have an account? Login */}
                  <div className="mt-2">
                    <p>
                      Already have an account?{" "}
                      <a href="/login" className="link link-primary">
                        Log in
                      </a>
                    </p>
                  </div>

                  {/* Forgot Password Link */}
                  <div className="mt-2">
                    <a className="link link-hover">Forgot password?</a>
                  </div>

                  {/* Sign Up Button */}
                  <button
                    type="submit"
                    className="btn btn-neutral mt-4 w-full"
                    disabled={!agreeToTerms}>
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

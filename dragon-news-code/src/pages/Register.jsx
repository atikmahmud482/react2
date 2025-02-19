import { useState, useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { useNavigate } from "react-router-dom"; // To redirect user after successful registration
import { FirebaseError } from "firebase/app";

const Register = () => {
  const { createNewUser } = useContext(AuthContext);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(""); // Reset error message
    setSuccess(""); // Reset success message

    try {
      const userCredential = await createNewUser(email, password);
      console.log("User created:", userCredential.user);
      setSuccess("Registration successful! Redirecting to login...");
      setTimeout(() => navigate("/auth/login"), 2000); // Redirect to login page
    } catch (error) {
      if (error instanceof FirebaseError) {
        if (error.code === "auth/email-already-in-use") {
          setError("This email is already registered. Please log in.");
        } else {
          setError(error.message);
        }
      } else {
        setError("An unexpected error occurred.");
      }
    }
  };

  return (
    <div className="bg-white text-black min-h-screen flex flex-col justify-start">
      <div className="card bg-white text-black w-full max-w-lg shadow-2xl p-6 mx-auto mt-3">
        <form onSubmit={handleSubmit} className="card-body space-y-4">
          <h1 className="text-4xl font-bold mb-2">Register Now!</h1>

          {/* Display Error Message */}
          {error && <p className="text-red-500 text-sm">{error}</p>}

          {/* Display Success Message */}
          {success && <p className="text-green-500 text-sm">{success}</p>}

          <fieldset className="mb-3">
            <label className="text-lg text-black">Name</label>
            <input
              name="name"
              type="text"
              className="input bg-white text-black border border-gray-300 p-2 w-full mt-1"
              placeholder="Enter your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </fieldset>
          <fieldset className="mb-3">
            <label className="text-lg text-black">Email</label>
            <input
              name="email"
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
              name="password"
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
            Register
          </button>
        </form>

        <div className="mt-4 text-center">
          <p className="text-sm">
            Already have an account?{" "}
            <a href="/auth/login" className="text-blue-500 hover:underline">
              Login here
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;

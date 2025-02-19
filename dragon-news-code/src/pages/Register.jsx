import { useState, useContext } from "react";
import { AuthContext } from "../provider/AuthProvider"; // Import AuthContext

const Register = () => {
  const { createNewUser } = useContext(AuthContext);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [photoURL, setPhotoURL] = useState(""); // ✅ FIXED: Added photoURL state

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const userCredential = await createNewUser(
        email,
        password,
        name,
        photoURL
      );
      console.log("User created:", userCredential.user);
    } catch (error) {
      console.error("Error creating user:", error.message);
    }
  };

  return (
    <div className="bg-white text-black min-h-screen flex flex-col justify-start">
      <div className="card bg-white text-black w-full max-w-lg shadow-2xl p-6 mx-auto mt-3">
        <form onSubmit={handleSubmit} className="card-body space-y-4">
          <h1 className="text-4xl font-bold mb-2">Register Now!</h1>
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
            <label className="text-lg text-black">
              Profile Picture URL (Optional)
            </label>
            <input
              type="text"
              className="input bg-white text-black border border-gray-300 p-2 w-full mt-1"
              placeholder="Enter profile picture URL"
              value={photoURL}
              onChange={(e) => setPhotoURL(e.target.value)}
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

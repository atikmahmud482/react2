import { FaGoogle } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
const SocialLogin = () => {
  return (
    <div>
      <h2 className="font-semibold mb-3">Login With</h2>
      <div className="*w-full space-y-2 ">
        <button className="btn  bg-amber-100 border-none text-black hover:bg-amber-200">
          {" "}
          <FaGoogle /> Login With Google
        </button>
        <button className="btn bg-amber-100 border-none text-black hover:bg-amber-200">
          <FaGithub /> Login With Github
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;

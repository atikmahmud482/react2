import { FaGoogle, FaGithub } from "react-icons/fa";

const SocialLogin = () => {
  return (
    <div className="w-full flex justify-center">
      <div className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg px-4">
        <h2 className="font-semibold text-lg mb-3 text-center">Login With</h2>
        <div className="w-full flex flex-col gap-3">
          <button className="flex items-center justify-center gap-2 w-full btn bg-amber-100 border-none text-black hover:bg-amber-200">
            <FaGoogle /> Login With Google
          </button>
          <button className="flex items-center justify-center gap-2 w-full btn bg-amber-100 border-none text-black hover:bg-amber-200">
            <FaGithub /> Login With Github
          </button>
        </div>
      </div>
    </div>
  );
};

export default SocialLogin;

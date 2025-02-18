import { FaFacebook, FaTwitter } from "react-icons/fa";
import { ImInstagram } from "react-icons/im";

const FindUs = () => {
  return (
    <div className="w-full flex justify-center">
      <div className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg px-4">
        <h2 className="font-semibold text-lg mb-3 text-center">Find Us On</h2>
        <div className="w-full flex flex-col gap-3">
          <button className="flex items-center justify-center gap-2 w-full btn bg-amber-100 border-none text-black hover:bg-amber-200">
            <FaFacebook /> Facebook
          </button>
          <button className="flex items-center justify-center gap-2 w-full btn bg-amber-100 border-none text-black hover:bg-amber-200">
            <ImInstagram /> Instagram
          </button>
          <button className="flex items-center justify-center gap-2 w-full btn bg-amber-100 border-none text-black hover:bg-amber-200">
            <FaTwitter /> Twitter
          </button>
        </div>
      </div>
    </div>
  );
};

export default FindUs;

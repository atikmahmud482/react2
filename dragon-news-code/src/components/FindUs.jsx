import { FaFacebook, FaTwitter } from "react-icons/fa";
import { ImInstagram } from "react-icons/im";

const FindUs = () => {
  return (
    <div>
      <h2 className="font-semibold  mb-3">Find Us On</h2>
      <div className="join join-vertical lg:join-horizontal">
        <button className=" btn bg-amber-100 border-none text-black hover:bg-amber-200 join-item justify-start">
          <FaFacebook></FaFacebook> Facebook
        </button>
        <button className="btn bg-amber-100 border-none text-black hover:bg-amber-200 join-item justify-start">
          <ImInstagram></ImInstagram> Instagram
        </button>
        <button className="btn bg-amber-100 border-none text-black hover:bg-amber-200 join-item justify-start">
          <FaTwitter></FaTwitter> Twitter
        </button>
      </div>
    </div>
  );
};

export default FindUs;

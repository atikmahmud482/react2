import logo from "../assets/logo.png";
const Header = () => {
  return (
    <div className="flex flex-col justify-center items-center gap-2 py-2 bg-white ">
      <div className="logo">
        <img className="w-[300px]" src={logo} alt="" />
      </div>
      <h2 className="text-gray-300">Journalism Without Fear or Favour</h2>
    </div>
  );
};

export default Header;

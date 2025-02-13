import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";

const Root = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Outlet /> {/* This will load Home or other child routes */}
    </div>
  );
};

export default Root;

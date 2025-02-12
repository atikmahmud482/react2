import { Outlet } from "react-router";
import Header from "../components/Header";

const Main = () => {
  return (
    <div className="">
      <Header></Header>
      <Outlet></Outlet>
    </div>
  );
};

export default Main;

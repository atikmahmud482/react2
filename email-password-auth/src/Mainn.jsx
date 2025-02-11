import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import Home from "./Home";

const Mainn = () => {
  return (
    <div>
      <Header></Header>
      <Outlet></Outlet>
    </div>
  );
};

export default Mainn;

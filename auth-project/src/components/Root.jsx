import { Outlet } from "react-router-dom";

const Root = () => {
  return (
    <div>
      <Outlet /> {/* This will load Home or other child routes */}
    </div>
  );
};

export default Root;

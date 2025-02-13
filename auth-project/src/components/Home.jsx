import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider"; // Import AuthContext

const Home = () => {
  const authInfo = useContext(AuthContext); // Access authInfo

  return (
    <div>
      <h1>Welcome, {authInfo?.name}</h1>
    </div>
  );
};

export default Home;

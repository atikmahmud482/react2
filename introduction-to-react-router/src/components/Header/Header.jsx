import { Link } from "react-router-dom";
import "./Header.css";
const Header = () => {
  return (
    <div>
      <h2>Navbar</h2>
      <nav>
        <Link to="/">home</Link>
        <Link to="/users">users</Link>
        <Link to="/about">about</Link>
        <Link to="/contact">contact</Link>
      </nav>
    </div>
  );
};

export default Header;

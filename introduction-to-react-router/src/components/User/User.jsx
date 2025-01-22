import { Link } from "react-router-dom";

const User = ({ user }) => {
  const { id, name, email, phone } = user;
  const userStyle = {
    border: "2px solid yellow",
    margin: "10px",
    borderRadius: "10px",
    padding: "10px",
  };
  return (
    <div style={userStyle}>
      <h4>{name}</h4>
      <p>{email}</p>
      <p>{phone}</p>
      <Link to={`/user/${id}`}>Show Details</Link>
    </div>
  );
};

export default User;

import { useLoaderData } from "react-router-dom";

const UserDetails = () => {
  const userData = useLoaderData();
  const { name, email, phone } = userData;
  const userStyle = {
    border: "2px solid yellow",
    margin: "10px",
    borderRadius: "10px",
    padding: "10px",
  };
  return (
    <div style={userStyle}>
      <h2>Name: {name}</h2>
      <h3>Email: {email}</h3>
      <h3>Phone: {phone}</h3>
    </div>
  );
};

export default UserDetails;

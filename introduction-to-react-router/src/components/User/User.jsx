import React from "react";

const User = ({ user }) => {
  const { id, name, email, phone } = user;
  const userStyle = {
    border: "1px solid gray",
    margin: "10px",
    padding: "10px",
  };
  return (
    <div style={userStyle}>
      <h4>{name}</h4>
      <p>{email}</p>
      <p>{phone}</p>
    </div>
  );
};

export default User;

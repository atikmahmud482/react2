import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Post = ({ post }) => {
  const { id, title, body } = post;
  const navigate = useNavigate();
  const postStyle = {
    border: "2px solid yellow",
    margin: "10px",
    borderRadius: "10px",
    padding: "10px",
  };

  const handleShowDetails = () => {
    navigate(`/post/${id}`);
  };

  return (
    <div style={postStyle}>
      <h2>Id: {id}</h2>
      <h3>Title: {title}</h3>
      <Link to={`/post/${id}`}>Post Details</Link>
      <button onClick={handleShowDetails}>Click to see details</button>
    </div>
  );
};

export default Post;

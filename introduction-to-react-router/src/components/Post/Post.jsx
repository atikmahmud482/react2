import React from "react";
import { Link } from "react-router-dom";

const Post = ({ post }) => {
  const { id, title, body } = post;
  const postStyle = {
    border: "2px solid yellow",
    margin: "10px",
    borderRadius: "10px",
    padding: "10px",
  };
  return (
    <div style={postStyle}>
      <h2>Id: {id}</h2>
      <h3>Title: {title}</h3>
      <Link to={`/post/${id}`}>Post Details</Link>
    </div>
  );
};

export default Post;

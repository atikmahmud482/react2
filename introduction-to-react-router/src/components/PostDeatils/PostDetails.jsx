import { useLoaderData } from "react-router-dom";

const PostDetails = () => {
  const post = useLoaderData();
  const { id, title, body } = post;
  return (
    <div>
      <h2>Post Id: {id}</h2>
      <h2>Post Title: {title} </h2>
      <p>Post Details : {body}</p>
    </div>
  );
};

export default PostDetails;

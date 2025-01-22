import { useLoaderData, useNavigate } from "react-router-dom";

const PostDetails = () => {
  const post = useLoaderData();
  const navigate = useNavigate();
  const { id, title, body } = post;
  const handleGoBack = () => {
    navigate(-1);
  };
  return (
    <div>
      <h2>Post Id: {id}</h2>
      <h2>Post Title: {title} </h2>
      <p>Post Details : {body}</p>
      <button onClick={handleGoBack}>Go Back</button>
    </div>
  );
};

export default PostDetails;

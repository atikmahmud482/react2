import { useEffect, useState } from "react";
import Post from "./Single-post";

export default function Posts() {
  const [posts, setPosts] = useState();
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((data) => setPosts(data));
  }, []);

  return (
    <div className="">
      <h3>Posts: {posts.length} </h3>
      {posts.map((post) => (
        <Post post={post}></Post>
      ))}
    </div>
  );
}

// No.1 Create a state to store the data.
// No.2 Create use effect with no dependencies.
// No.3 Use fetch to load data

import { useEffect, useState } from "react";

export default function Posts() {
  const [posts, setPosts] = useState();
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((data) => console.log(data));
  }, []);

  return (
    <div className="">
      <h3>Posts:</h3>
    </div>
  );
}

// No.1 Create a state to store the data.
// No.2 Create use effect with no dependencies.
// No.3 Use fetch to load data

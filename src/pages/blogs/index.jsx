import { useState, useEffect } from "react";

function Blogs() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos/")
      .then((response) => response.json())
      .then((json) => setPosts(json));
  }, []);

  return (
    <>
      <h1>Welcome to the Blogs</h1>
      {posts.map((item, index) => (
        <div key={index}>- {item.title}</div>
      ))}
    </>
  );
}

export default Blogs;

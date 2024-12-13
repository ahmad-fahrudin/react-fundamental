import { useState } from "react";
import Article from "../components/Article";
import postsData from "../posts.json";
import Search from "../components/Search";

function Homepage() {
  const [posts, setPosts] = useState(postsData);

  const onChange = (value) => {
    const filteredPosts = postsData.filter((item) =>
      item.title.includes(value)
    );
    setPosts(filteredPosts);
  };

  return (
    <>
      <h1>Welcome to the Blogs</h1>
      <Search onChange={onChange} />
      {posts.map((props, index) => (
        <Article {...props} key={index} />
      ))}
    </>
  );
}

export default Homepage;

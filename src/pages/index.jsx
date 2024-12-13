import { useState, useEffect } from "react";
import Article from "../components/Article";
import postsData from "../posts.json";
import Search from "../components/Search";

function Homepage() {
  const [posts, setPosts] = useState(postsData);
  const [totalPosts, setTotalPosts] = useState(0);

  const onChange = (value) => {
    const filteredPosts = postsData.filter((item) =>
      item.title.includes(value)
    );
    setPosts(filteredPosts);
    setTotalPosts(filteredPosts.length);
  };

  // useEffect(() => {
  //   console.log("Add Posts new");
  // }, [posts]);
  // menggunakan [] agar useEffect hanya dijalankan sekali
  // kegunaan return pada useEffect adalah untuk melakukan cleanup

  return (
    <>
      <h1>Welcome to the Blogs</h1>
      <Search onChange={onChange} totalPosts={totalPosts} />
      <br />
      <hr />
      {posts.map((props, index) => (
        <Article {...props} key={index} />
      ))}
    </>
  );
}

export default Homepage;

import { useState, useEffect } from "react";
import Article from "../components/Article";
import postsData from "../posts.json";
import Search from "../components/Search";

function Homepage() {
  const [posts, setPosts] = useState(postsData);
  const [totalPosts, setTotalPosts] = useState(0);
  const [externalPosts, setExternalPosts] = useState([]);

  const onChange = (value) => {
    const filteredPosts = postsData.filter((item) =>
      item.title.includes(value)
    );
    setPosts(filteredPosts);
    setTotalPosts(filteredPosts.length);
  };

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos/")
      .then((response) => response.json())
      .then((json) => setExternalPosts(json));
  }, []);
  // menggunakan [] agar useEffect hanya dijalankan sekali
  // kegunaan return pada useEffect adalah untuk melakukan cleanup

  useEffect(() => {
    console.log("Add Posts new");
  }, [posts]);

  return (
    <>
      <h1>Welcome to the Blogs</h1>
      <Search onChange={onChange} totalPosts={totalPosts} />
      <br />
      <hr />
      {posts.map((props, index) => (
        <Article {...props} key={index} />
      ))}
      <hr />
      <h2>External Posts</h2>
      {externalPosts.map((item, index) => (
        <div key={index}>- {item.title}</div>
      ))}
    </>
  );
}

export default Homepage;

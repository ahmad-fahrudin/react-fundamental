import { useState } from "react";
import Article from "../components/Article";
import posts from "../posts.json";

function Homepage() {
  const [search, setSearch] = useState("");

  const changeSearch = (event) => {
    setSearch(event.target.value);
  };

  return (
    <div>
      <h1>Welcome to the Blogs</h1>
      <div>
        Cari artikel : <input onChange={changeSearch} />
      </div>
      <small>Ditemukan data dengan pencarian {search}</small>
      {posts.map(({ title, tags, date }) => (
        <Article {...{ title, tags, date }} key={title} />
      ))}
    </div>
  );
}

export default Homepage;

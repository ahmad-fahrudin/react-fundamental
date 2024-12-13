import { useLoaderData, Link } from "react-router-dom";

useLoaderData;

function Blog() {
  const posts = useLoaderData();

  return (
    <>
      <h1>Welcome to the Blogs</h1>
      {posts.map((item, index) => (
        <div key={index}>
          <Link to={`/blog/${item.id}`}>- {item.title}</Link>
        </div>
      ))}
    </>
  );
}

export default Blog;

import { useLoaderData } from "react-router-dom";

function SinglePost() {
  const post = useLoaderData();

  return (
    <>
      <h1>Welcome to the Single Post</h1>
      <div>{post?.title}</div>
    </>
  );
}

export default SinglePost;

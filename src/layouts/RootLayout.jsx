import { Link, Outlet } from "react-router-dom";

function RootLayout() {
  return (
    <>
      <nav>
        <Link to="/">Home</Link> | <Link to="/about">About</Link> |{" "}
        <Link to="/blog">Blogs</Link>
      </nav>
      <Outlet />
    </>
  );
}

export default RootLayout;

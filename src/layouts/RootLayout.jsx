import { NavLink, Outlet } from "react-router-dom";
import "../styles/index.css";

function RootLayout() {
  return (
    <>
      <nav>
        <NavLink
          className={({ isActive }) => (isActive ? "active" : "")}
          to="/">
          Home
        </NavLink>{" "}
        |{" "}
        <NavLink
          className={({ isActive }) => (isActive ? "active" : "")}
          to="/about">
          About
        </NavLink>{" "}
        |{" "}
        <NavLink
          className={({ isActive }) => (isActive ? "active" : "")}
          to="/blog">
          Blogs
        </NavLink>
      </nav>
      <Outlet />
    </>
  );
}

export default RootLayout;

import { createBrowserRouter } from "react-router-dom";
import RootLayout from "../layouts/RootLayout";
import Homepage from "../pages/index";
import About from "../pages/about";
import Blogs from "../pages/blogs";
import Post from "../pages/blogs/_id";
import { postLoaderById, postLoader } from "../apis/loaders";
import ErrorPage from "../components/ErrorPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Homepage />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/blog",
        element: <Blogs />,
        loader: postLoader,
      },
      {
        path: "/blog/:id",
        element: <Post />,
        loader: postLoaderById,
      },
    ],
  },
]);

import { createBrowserRouter } from "react-router-dom";
import Homepage from "../pages/index";
import About from "../pages/about";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Homepage />,
  },
  {
    path: "/about",
    element: <About />,
  },
]);

import { createBrowserRouter } from "react-router-dom";
import Homepage from "../pages/index";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Homepage />,
  },
]);

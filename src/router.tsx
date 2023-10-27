import { createBrowserRouter } from "react-router-dom";
import Root from "./Root";
import Archive from "./pages/Archive";
import Notes from "./pages/Notes";
import Trash from "./pages/Trash";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <Notes />,
      },
      {
        path: "/archive",
        element: <Archive />,
      },
      {
        path: "/trash",
        element: <Trash />,
      },
    ],
  },
]);

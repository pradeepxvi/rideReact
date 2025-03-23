import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
  Navigate,
} from "react-router-dom";

import NavBar from "./NavBar";
import Feed from "./Feed";
import CreatePost from "./CreatePost";
import SocialMediaStore from "../../store/SocialMediaStore";
import { useEffect, useRef } from "react";

const SocialMediaApp = () => {
  useEffect(() => {
    fetch("https://dummyjson.com/posts")
      .then((res) => res.json())
      .then((data) => console.log(data.posts))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className=" w-full">
      <SocialMediaStore>
        <NavBar />
        <Outlet />
      </SocialMediaStore>
    </div>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Navigate to="/socialmedia/feed" />,
  },
  {
    path: "/socialmedia",
    element: <SocialMediaApp />,
    children: [
      {
        path: "feed",
        element: <Feed />,
      },
      {
        path: "create",
        element: <CreatePost />,
      },
    ],
  },
]);

const SocialMedia = () => {
  return <RouterProvider router={router} />;
};

export default SocialMedia;

import { StrictMode, Suspense } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Root from "./components/Root/Root.jsx";
import Mobiles from "./components/Mobiles/Mobiles.jsx";
import Home from "./components/Home/Home.jsx";
import About from "./components/About/About.jsx";
import Laptops from "./components/Laptops/Laptops.jsx";
import Users from "./components/Users/Users.jsx";
import UserData from "./components/Users/UserData.jsx";
import Users2 from "./components/Users/Users2.jsx";
import UserDetails from "./components/Users/UserDetails.jsx";
import Posts from "./components/Posts/Posts.jsx";
import PostDetails from "./components/Posts/PostDetails.jsx";
const userPromise = fetch("https://jsonplaceholder.typicode.com/users").then(
  (res) => res.json()
);
const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      { index: true, Component: Home },
      { path: "mobiles", Component: Mobiles },
      { path: "laptops", Component: Laptops },
      { path: "about", Component: About },
      {
        path: "users",
        loader: () => fetch("https://jsonplaceholder.typicode.com/users"),
        Component: Users,
      },
      {
        path: "users2",
        element: (
          <Suspense fallback="Loading..">
            <Users2 userPromise={userPromise}></Users2>
          </Suspense>
        ),
      },
      {
        path: "users/:userId",
        loader: ({ params }) => {
          return fetch(
            `https://jsonplaceholder.typicode.com/users/${params.userId}`
          );
        },
        Component: UserDetails,
      },
      {
        path: "posts",
        loader: () => fetch("https://jsonplaceholder.typicode.com/posts#"),
        Component: Posts,
      },
      {
        path:'posts/:postId',
        loader: ({params})=> fetch(`https://jsonplaceholder.typicode.com/posts/${params.postId}`),
        Component: PostDetails
      }
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>
);

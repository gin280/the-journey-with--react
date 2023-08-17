import { createBrowserRouter, Navigate } from "react-router-dom"
import NavLayout from "./components/NavLayout"
import Todos from "./page/Todos"
import Post from "./page/Post"
import User from "./page/User"
import Posts from "./page/Posts"
import Users from "./page/Users"
import ErrorPage from "./components/ErrorPage"

export const router = createBrowserRouter([
  {
    path: "/",
    element: <NavLayout />,
    children: [
      {
        errorElement: <ErrorPage />,
        children: [
          { index: true, element: <Navigate to="/posts" replace /> },
          {
            path: "*",
            element: (
              <div>
                <h1>404 Not Found</h1>
                <p>抱歉，我们找不到您请求的页面。</p>
              </div>
            ),
          },
          { path: "posts", element: <Posts /> },
          { path: "todos", element: <Todos /> },
          { path: "posts/:id", element: <Post /> },
          { path: "/users", element: <Users /> },
          { path: "users/:id", element: <User /> },
        ],
      },
    ],
  },
])

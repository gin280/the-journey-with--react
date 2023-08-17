import { Outlet, Link, ScrollRestoration } from "react-router-dom"
import { Suspense } from "react"
import { useIsFetching } from "@tanstack/react-query"

const NavLayout = () => {
  const isFetching = useIsFetching()
  return (
    <>
      <nav className="top-nav">
        <div className="nav-text-large">My App</div>
        <ul className="nav-list">
          <li>
            <Link to="/posts">Posts</Link>
          </li>
          <li>
            <Link to="/users">Users</Link>
          </li>
          <li>
            <Link to="/todos">Todos</Link>
          </li>
        </ul>
      </nav>
      <ScrollRestoration />
      {/* <div className={`${isFetching ? "loading-spinner" : ""}`}></div> */}
      <Suspense fallback={<div className="loading-spinner"></div>}>
        <div className={`container ${isFetching ? "loading" : ""}`}>
          <Outlet />
        </div>
      </Suspense>
    </>
  )
}

export default NavLayout

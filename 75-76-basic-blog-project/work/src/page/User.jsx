import { useQuery } from "@tanstack/react-query"
import { useParams, Link } from "react-router-dom"
import { fetchPostsForUser, fetchTodo, fetchUser } from "../api"

const User = () => {
  const { id } = useParams()
  const { data: user } = useQuery(["users", id], () => fetchUser(id))
  const { data: posts } = useQuery(["posts", `user_${id}`], () =>
    fetchPostsForUser(id)
  )
  const { data: todos } = useQuery(["todos", id], () => fetchTodo(id))
  console.log(posts)
  return (
    <div className="container">
      <h1 className="page-title">{user.name}</h1>
      <div className="page-subtitle">{user.email}</div>
      <div>
        <b>Company:</b> {user.company.name}
      </div>
      <div>
        <b>Website:</b> {user.website}
      </div>
      <div>
        <b>Address:</b> {user.address.street} {user.address.suite}{" "}
        {user.address.city} {user.address.zipcode}
      </div>
      <h3 className="mt-4 mb-2">Posts</h3>
      <div className="card-grid">
        {posts &&
          posts.map((post) => (
            <div key={post.id} className="card">
              <div className="card-header">{post.title}</div>
              <div className="card-body">
                <div className="card-preview-text">{post.body}</div>
              </div>
              <div className="card-footer">
                <Link className="btn" to={`/posts/${post.id}`}>
                  View
                </Link>
              </div>
            </div>
          ))}
      </div>
      <h3 className="mt-4 mb-2">Todos</h3>
      <ul>
        {todos &&
          todos.map((todo) => (
            <li
              key={todo.id}
              className={todo.completed ? "strike-through" : undefined}
            >
              {todo.title}
            </li>
          ))}
      </ul>
    </div>
  )
}

export default User

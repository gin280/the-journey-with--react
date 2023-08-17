import { useQuery } from "@tanstack/react-query"
import { useParams, Link } from "react-router-dom"
import { fetchPost, fetchPostComments, fetchUser } from "../api"

const Post = () => {
  const { id } = useParams()
  const { data: post } = useQuery(["posts", id], () => fetchPost(id))

  const { data: comments } = useQuery(["posts", id, "comments"], () =>
    fetchPostComments(id)
  )
  const { data: user } = useQuery(
    ["users", post?.userId],
    () => fetchUser(post?.userId),
    {
      enabled: !!post?.userId,
    }
  )
  return (
    user && (
      <div className="container">
        <h1 className="page-title">{post.title}</h1>
        <span className="page-subtitle">
          By: <Link to={`/users/${post.userId}`}>{user.name}</Link>
        </span>
        <div>{post.body}</div>
        <h3 className="mt-4 mb-2">Comments</h3>
        <div className="card-stack">
          {comments &&
            comments.map((comment) => (
              <div key={comment.id} className="card">
                <div className="card-body">
                  <div className="text-sm mb-1">{comment.email}</div>
                  {comment.body}
                </div>
              </div>
            ))}
        </div>
      </div>
    )
  )
}

export default Post

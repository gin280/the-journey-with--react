import { useQuery } from "@tanstack/react-query"
import { fetchPosts } from "../api"
import { Link } from "react-router-dom"

const Posts = () => {
  const { data } = useQuery(["posts"], fetchPosts)

  return (
    <div className="container">
      <h1 className="page-title">Posts</h1>
      <div className="card-grid">
        {data &&
          data.map((post) => (
            <div key={post.id} className="card">
              <div className="card-header">{post.title}</div>
              <div className="card-body">
                <div className="card-preview-text">{post.body}</div>
              </div>
              <div className="card-footer">
                <Link to={`/posts/${post.id}`} className="btn">
                  View
                </Link>
              </div>
            </div>
          ))}
      </div>
    </div>
  )
}

export default Posts

import { useQuery } from "@tanstack/react-query"
import { fetchUsers } from "../api"
import { Link } from "react-router-dom"

const Users = () => {
  const { data } = useQuery(["users"], fetchUsers)
  return (
    <div className="container">
      <h1 className="page-title">Users</h1>
      <div className="card-grid">
        {data &&
          data.map((user) => (
            <div key={user.id} className="card">
              <div className="card-header">Mrs. Dennis Schulist</div>
              <div className="card-body">
                <div>{user.name}</div>
                <div>{user.company.name}</div>
                <div>{user.website}</div>
              </div>
              <div className="card-footer">
                <Link className="btn" to={`/users/${user.id}`}>
                  View
                </Link>
              </div>
            </div>
          ))}
      </div>
    </div>
  )
}

export default Users

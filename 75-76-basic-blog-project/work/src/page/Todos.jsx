import { useQuery } from "@tanstack/react-query"
import { fetchTodos } from "../api"

const Todos = () => {
  const { data } = useQuery(["todos"], fetchTodos)
  return (
    <div className="container">
      <h1 className="page-title">Todos</h1>
      <ul>
        {data &&
          data.map((todo) => (
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

export default Todos

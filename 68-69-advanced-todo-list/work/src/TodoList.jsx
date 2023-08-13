import { useContext } from "react"
import { TodoContext } from "./App"
import { TodoItem } from "./TodoItem"

const TodoList = () => {
  const { todos } = useContext(TodoContext)
  return (
    <ul id="list">
      {todos.map((todo) => {
        return <TodoItem key={todo.id} {...todo} />
      })}
    </ul>
  )
}

export default TodoList

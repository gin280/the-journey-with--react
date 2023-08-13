import { useContext, useRef } from "react"
import { TodoContext } from "./App"

const TodoForm = () => {
  const inputRef = useRef()
  const { setNewTodoName, addNewTodo } = useContext(TodoContext)
  const submit = (e) => {
    e.preventDefault()
    addNewTodo()
  }
  return (
    <form onSubmit={submit} id="new-todo-form">
      <label htmlFor="todo-input">New Todo</label>
      <input
        onChange={(e) => setNewTodoName(e.target.value)}
        type="text"
        id="todo-input"
        ref={inputRef}
      />
      <button>Add Todo</button>
    </form>
  )
}

export default TodoForm

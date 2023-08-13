import { createContext, useEffect, useReducer, useState } from "react"
import "./styles.css"
import TodoForm from "./TodoForm"
import TodoList from "./TodoList"
import SearchForm from "./SearchForm"

const ACTIONS = {
  ADD_NEW_TODO: "ADD_NEW_TODO",
  TOGGLE_TODO: "TOGGLE_TODO",
  DELETE_TODO: "DELETE_TODO",
}

export const TodoContext = createContext()

const reducer = (todos, { type, playload }) => {
  switch (type) {
    case "ADD_NEW_TODO":
      return [
        ...todos,
        {
          name: playload.newTodoName,
          completed: false,
          id: crypto.randomUUID(),
        },
      ]
    case "TOGGLE_TODO":
      return todos.map((todo) => {
        if (todo.id === playload.todoId)
          return { ...todo, completed: playload.completed }
        return todo
      })
    case "DELETE_TODO":
      return todos.filter((todo) => todo.id !== playload.todoId)
  }
}

function App() {
  const [search, setSearch] = useState("")
  const [isHideCompleted, setIsHideCompleted] = useState(false)
  const [todos, dispatch] = useReducer(reducer, [], () => {
    const todos = localStorage.getItem("todos")
    if (todos) {
      return JSON.parse(todos)
    } else {
      return []
    }
  })
  const [newTodoName, setNewTodoName] = useState("")

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos))
  }, [todos])

  const filterTodos = todos.filter((todo) => {
    if (isHideCompleted && todo.completed) return false
    return todo.name.includes(search)
  })

  function addNewTodo() {
    if (newTodoName === "") return
    dispatch({ type: ACTIONS.ADD_NEW_TODO, playload: { newTodoName } })
    setNewTodoName("")
  }

  function toggleTodo(todoId, completed) {
    dispatch({ type: ACTIONS.TOGGLE_TODO, playload: { todoId, completed } })
  }

  function deleteTodo(todoId) {
    dispatch({ type: ACTIONS.DELETE_TODO, playload: { todoId } })
  }

  return (
    <TodoContext.Provider
      value={{
        newTodoName,
        setNewTodoName,
        addNewTodo,
        toggleTodo,
        deleteTodo,
        todos: filterTodos,
      }}
    >
      <>
        <SearchForm
          search={search}
          setSearch={setSearch}
          isHideCompleted={isHideCompleted}
          setIsHideCompleted={setIsHideCompleted}
        />
        <TodoList />
        <TodoForm />
      </>
    </TodoContext.Provider>
  )
}

export default App

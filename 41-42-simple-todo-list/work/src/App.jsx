import { useState } from "react";

function App() {
  const [todo, setTodo] = useState(""); // [todo, setTodo
  const [todos, setTodos] = useState([]);

  const addTodo = () => {
    setTodos([...todos, { text: todo, checked: false }]);
    setTodo("");
  };
  const deleteTodo = (todo) => {
    setTodos(todos.filter((t) => t.text !== todo.text));
  };

  const handleChekcedChange = (e) => {
    console.info(e.target.value);
    setTodos(
      todos.map((todo) => {
        if (todo.text === e.target.value) {
          return { ...todo, checked: !todo.checked };
        }
        return todo;
      })
    );
  };

  const handleInputChange = (e) => {
    setTodo(e.target.value);
  };

  return (
    <>
      <TodoList
        handleChekcedChange={handleChekcedChange}
        todos={todos}
        deleteTodo={deleteTodo}
      />
      <div id="new-todo-form">
        <label htmlFor="todo-input">New Todo</label>
        <input
          onChange={handleInputChange}
          value={todo}
          type="text"
          id="todo-input"
        />
        <button onClick={addTodo}>Add Todo</button>
      </div>
    </>
  );
}

const TodoList = ({ todos, deleteTodo, handleChekcedChange }) => {
  return (
    <ul id="list">
      {todos.map((todo, idx) => (
        <Item
          key={idx}
          todo={todo}
          deleteTodo={deleteTodo}
          handleChekcedChange={handleChekcedChange}
        />
      ))}
    </ul>
  );
};

const Item = ({ todo, deleteTodo, handleChekcedChange }) => (
  <li className="list-item">
    <label className="list-item-label">
      <input
        onChange={handleChekcedChange}
        type="checkbox"
        value={todo.checked}
        data-list-item-checkbox
      />
      <span data-list-item-text>{todo.text}</span>
    </label>
    <button onClick={() => deleteTodo(todo)}>Delete</button>
  </li>
);

export default App;

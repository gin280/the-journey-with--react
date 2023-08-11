import { useState } from "react";

function App() {
  const [name, setName] = useState("yiong");
  const [age, setAge] = useState(0);

  function handleChange(e) {
    setName(e.target.value);
  }
  function handleAdd() {
    setAge((age) => age + 1);
  }
  function handleSub() {
    setAge((age) => age - 1);
  }
  return (
    <>
      <input type="text" value={name} onChange={(e) => handleChange(e)} />
      <button onClick={handleSub}>-</button>
      <button onClick={handleAdd}>+</button>
      My name is {name} and I am {age} years old
    </>
  );
}

export default App;

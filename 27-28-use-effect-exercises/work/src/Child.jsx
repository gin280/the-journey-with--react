import { useEffect, useState } from "react";

export function Child() {
  const [age, setAge] = useState(0);
  const [name, setName] = useState("");

  useEffect(() => {
    console.info(name);
    document.title = name;
  }, [name]);
  const hangleChange = (e) => {
    console.info(e.target.value);
    setName(e.target.value);
  };
  useEffect(() => {
    console.info(age);
  }, [age]);

  useEffect(() => {
    return () => console.info("Bye");
  });
  return (
    <div>
      <input type="text" value={name} onChange={hangleChange} />
      <br />
      <br />
      <button onClick={() => setAge((a) => a - 1)}>-</button>
      {age}
      <button onClick={() => setAge((a) => a + 1)}>+</button>
      <br />
      <br />
      My name is {name} and I am {age} years old.
    </div>
  );
}

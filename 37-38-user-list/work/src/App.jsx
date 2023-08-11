import { useEffect, useState } from "react";

function App() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);

    const controller = new AbortController();

    fetch("https://jsonplaceholder.typicode.com/users", {
      signal: controller.signal,
    })
      .then((response) => response.json())
      .then((json) => setUsers(json))
      .finally(() => setLoading(false));

    return () => {
      controller.abort();
    };
  }, []);

  return (
    <>
      <h1>User List</h1>
      <ul>
        {loading
          ? "Loading"
          : users.map((user) => <Item key={user.id} name={user.name} />)}
      </ul>
    </>
  );
}

function Item({ name }) {
  return <li>{name}</li>;
}

export default App;

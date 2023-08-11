import { useState } from "react";
import UserCard from "./components/UserCard";
import user from "./assets/user.json";

function App() {
  console.log(user, "user");

  const [count, setCount] = useState(0);
  const test = () => {
    console.log("test");
    setCount((prev) => prev + 1);
  };
  return (
    <>
      <div onClick={test}>{count}</div>
      <UserCard {...user} />
    </>
  );
}

export default App;

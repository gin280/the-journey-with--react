import { useEffect, useState } from "react";
import { Child } from "./Child";

export default function App() {
  const [show, setShow] = useState(true);

  const childComponent = show ? <Child /> : null;

  console.log("Render");

  useEffect(() => {
    console.log("Hi");
  }, []);

  return (
    <div>
      <button onClick={() => setShow((currentShow) => !currentShow)}>
        Show/Hide
      </button>
      {childComponent}
    </div>
  );
}

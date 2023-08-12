import { useState } from "react";
import { validateEmail, validatePassword } from "./validation";

function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isAfterFirstSubmit, setIsAfterFirstSubmit] = useState(false);

  const emailErrors = isAfterFirstSubmit ? validateEmail(email) : [];
  const passwordErrors = isAfterFirstSubmit ? validatePassword(password) : [];

  const submit = (e) => {
    e.preventDefault();
    setIsAfterFirstSubmit(true);
    if (
      validateEmail(email).length === 0 &&
      validatePassword(password).length === 0
    ) {
      alert("Success");
    }
  };

  return (
    <form onSubmit={submit} className="form">
      <div className={`form-group ${emailErrors.length > 0 ? "error" : ""}`}>
        <label className="label" htmlFor="email">
          Email
        </label>
        <input
          className="input"
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        {emailErrors.length > 0 && (
          <div className="msg">{emailErrors.join(", ")}</div>
        )}
      </div>
      <div className={`form-group ${passwordErrors.length > 0 ? "error" : ""}`}>
        <label className="label" htmlFor="password">
          Password
        </label>
        <input
          className="input"
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      {passwordErrors.length > 0 && (
        <div className="msg">{passwordErrors.join(", ")}</div>
      )}
      <button className="btn" type="submit">
        Submit
      </button>
    </form>
  );
}

export default App;

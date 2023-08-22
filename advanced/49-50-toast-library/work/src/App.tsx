import { useRef, useState } from "react"
import { useToast } from "./useToast"

function App() {
  const { addToast, removeToast } = useToast()
  const [id, setId] = useState<string>("")
  const inputRef = useRef<HTMLInputElement>(null)

  function createToast() {
    if (inputRef.current == null || inputRef.current.value === "") {
      return
    }
    setId(
      addToast(inputRef.current.value, {
        position: "top-left",
        autoDismiss: false,
      })
    )
  }
  return (
    <div className="form">
      <input type="text" ref={inputRef} />
      <button onClick={createToast}>Create Toast</button>
      <button onClick={() => removeToast(id)}>Remove Toast</button>
    </div>
  )
}

export default App

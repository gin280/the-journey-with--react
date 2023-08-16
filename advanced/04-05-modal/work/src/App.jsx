import React, { useEffect } from "react"
import { DialogModal } from "./DialogModal"

const App = () => {
  const [showModal, setShowModal] = React.useState(false)
  const [showDialog, setShowDialog] = React.useState(false)
  const dialogRef = React.useRef(null)
  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown)
    return () => {
      document.removeEventListener("keydown", handleKeyDown)
    }
  }, [])
  useEffect(() => {
    if (showDialog) {
      dialogRef.current.showModal()
    } else {
      dialogRef.current.close()
    }
  })
  const handleKeyDown = (e) => {
    if (e.key === "Escape") {
      setShowModal(false)
      setShowDialog(false)
    }
  }
  return (
    <>
      <button onClick={() => setShowModal(true)}>Show Custom Modal</button>
      <br />
      <button onClick={() => setShowDialog(true)} data-dialog-open>
        Show Dialog Modal
      </button>

      <DialogModal
        showDialog={showDialog}
        setShowDialog={setShowDialog}
        ref={dialogRef}
      />

      <div className={`modal-overlay ${showModal ? "show" : ""}`}>
        <div className="modal">
          <p>
            This is a <strong>CUSTOM</strong> modal
          </p>
          <button onClick={() => setShowModal(false)}>Close</button>
        </div>
      </div>
    </>
  )
}

export default App

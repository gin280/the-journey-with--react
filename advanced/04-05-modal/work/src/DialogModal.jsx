import { createPortal } from "react-dom"
import { forwardRef } from "react"

const _DialogModal = ({ showDialog, setShowDialog }, ref) => {
  const modelRoot = document.getElementById("modal-container")
  return createPortal(
    <div ref={ref} className={`modal-overlay ${showDialog ? "show" : ""}`}>
      <div className="modal">
        <p>
          This is a <strong>CUSTOM</strong> modal
        </p>
        <button onClick={() => setShowDialog(false)}>Close</button>
      </div>
    </div>,
    modelRoot
  )
}

export const DialogModal = forwardRef(_DialogModal)

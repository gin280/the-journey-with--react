import { useContext } from "react"
import { ToastContext } from "./ToastProvider"

export function useToast() {
  const value = useContext(ToastContext)
  if (value === null) {
    throw new Error("useToast must be used within a ToastProvider")
  }
  return value
}

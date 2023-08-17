import { useState } from "react"
import { DatePicker } from "./DatePicker"
import Test from "./Test"

import "./styles.css"

export default function App() {
  const [value, setValue] = useState()
  // return <DatePicker value={value} onChange={setValue} />
  return <Test />
}

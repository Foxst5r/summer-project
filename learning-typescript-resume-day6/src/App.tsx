import { Select } from "./Select"
import { useState} from "react"

const options = [
  { label: "First", value: 1 },
  { label: "Second", value: 1 },
  { label: "Third", value: 1 },
  { label: "Fourth", value: 1 },
  { label: "Fifth", value: 1 },
]


function App() {
  const [value, setValue] = useState(options[0])
  
  return (
    <>
        <Select options = {options} value = {value} onChange = {o => setValue(o)} />
    </>
  )
}

export default App
import { Select, SelectOption } from "./Select"
import { useState} from "react"

const options = [
  { label: "First", value: 1 },
  { label: "Second", value: 1 },
  { label: "Third", value: 1 },
  { label: "Fourth", value: 1 },
  { label: "Fifth", value: 1 },
]


function App() {
  const [value1, setValue1] = useState<SelectOption[]>([options[0]])
  const [value2, setValue2] = useState<SelectOption | undefined>(options[0])
  
  return (
    <>
        <Select multiple options = {options} value = {value1} onChange = {o => setValue1(o)} />
        <br />
        <Select options = {options} value = {value2} onChange = {o => setValue2(o)} />
    </>
  )
}

export default App
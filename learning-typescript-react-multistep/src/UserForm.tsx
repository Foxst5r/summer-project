import { Formwrapper } from "./FormWrapper";

type UserData = {
  firstName: string
  lastName: string
  age: string
}

type UserFormProps = UserData & {
  updateFields: (fields: Partial<UserData>) => void
}


export function UserForm ( {firstName, lastName, age, updateFields } : UserFormProps ) {
  return (
  <Formwrapper title = "User Details">
    <label> First Name</label>
    <input autoFocus required type = "text" value = {firstName} onChange />
    <label> Last Name</label>
    <input required type = "text" value = {lastName}  />
    <label> Age </label>
    <input required min = {1} type = "number" value = {age} />
  </Formwrapper>
  )
}
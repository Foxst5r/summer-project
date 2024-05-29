import { Formwrapper } from "./FormWrapper";

export function AccountForm () {
  return (
  <Formwrapper title = "Account Creation">
    <label> Email</label>
    <input autoFocus required type = "email" />
    <label> Password</label>
    <input required type = "password" />
  </Formwrapper>
  )
}
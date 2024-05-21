import "./style.css"
import Typewriter from "./Typewriter"

const typewriter = new Typewriter(document.querySelector(".whitespace") as HTMLDivElement, {
  loop: true,
  typingSpeed: 10,
  deletingSpeed: 10,
})

typewriter
  .typeString("Where do I start?")
  .pauseFor(1000)
  .typeString("\n\nfunction")
  .deleteChars(7)
  .typeString("const temp")
  .pauseFor(150)
  .deleteAll()
  .typeString("Why is this so hard?")
  .pauseFor(1000)
  .typeString("\n\nDoes everyone struggle this much")
  .pauseFor(1000)
  .typeString("\n\nThere has to be an easier way")
  .pauseFor(1000)
  .deleteAll(10)
  .start()
  
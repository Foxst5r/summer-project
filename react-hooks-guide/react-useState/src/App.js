import React, { useState } from "react";

//function countInitial() {
//  console.log("run function");
//  return 4;
//  }

function App() {
  const [count, setCount] = useState(() => {
    console.log("run function");
    return 4;
  });

  function decrementCount() {
    //setCount(count - 1); incorrect
    setCount((prevCount) => prevCount - 1);
  }
  function incrementCount() {
    //setCount(count - 1); incorrect
    setCount((prevCount) => prevCount + 1);
  }

  return (
    <>
      <button onClick={decrementCount}>-</button>
      <span>{count}</span>
      <button onClick={incrementCount}>+</button>
    </>
  );
}

export default App;

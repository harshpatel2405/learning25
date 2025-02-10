import React from "react";
import { useState } from "react";

const UseStateDemo1 = () => {
  const [count, setCount] = useState(0);

  function increase() {
    setCount(count + 1);
  }

  function decrease() {
    setCount(count - 1);
  }

  function reset() {
    setCount(0);
  }

  return (
    <div style={{ textAlign: "center" }}>
      <h1>UseState Demo 1</h1>

      <h1>Count = {count}</h1>

      <button onClick={increase} style={{ padding: "5px", margin: "10px",fontWeight:"bold",fontSize:"20px" }}>
        Increase
      </button>

      <button onClick={decrease} style={{ padding: "5px", margin: "10px",fontWeight:"bold",fontSize:"20px" }}>
        Decrease
      </button>
      <button onClick={reset} style={{ padding: "5px", margin: "10px",fontWeight:"bold",fontSize:"20px" }}>
        Reset
      </button>
    </div>
  );
};

export default UseStateDemo1;

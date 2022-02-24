/*eslint-disable*/

import React, { useState, useEffect } from "react";

function App() {
  const [input, setInput] = useState("");
  const [type, setType] = useState("password");

  const check = (e) => {
    if (input === "1234") {
      setType("text");
      setInput("OK");
    } else {
      setInput("WRONG");
      setType("text");
    }
  };

  useEffect(() => {
    if (type === "text") {
      setTimeout(() => {
        setInput("");
        setType("password");
      }, 5000);
    }
  }, [type]);

  return (
    <div className="app">
      <input type={type} value={input} disabled={true} />

      <div className="buttons">
        <button onClick={() => setInput(input + 1)}>1</button>
        <button onClick={() => setInput(input + 2)}>2</button>
        <button onClick={() => setInput(input + 3)}>3</button>
        <button onClick={() => setInput(input + 4)}>4</button>
        <button onClick={() => setInput(input + 5)}>5</button>
        <button onClick={() => setInput(input + 6)}>6</button>
        <button onClick={() => setInput(input + 7)}>7</button>
        <button onClick={() => setInput(input + 8)}>8</button>
        <button onClick={() => setInput(input + 9)}>9</button>
        <button onClick={check}>CHECK</button>
      </div>
    </div>
  );
}

export default App;

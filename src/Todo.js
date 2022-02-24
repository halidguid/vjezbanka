/*eslint-disable*/

import React, { useState, useEffect } from "react";

export default function Todo() {
  const [oneTodo, setOneTodo] = useState("");
  const [todos, setTodos] = useState([]);

  const remove = (index) => {
    let tempTodos = [];

    for (let i = 0; i < todos.length; i++) {
      if (i !== index) {
        tempTodos.push(todos[i]);
      }
    }

    setTodos(tempTodos);
  };

  useEffect(() => {
    let tempTodos = JSON.parse(localStorage.getItem("todos"));

    setTodos(tempTodos);
  }, []);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <div className="container">
      <div className="header">
        <input
          type="text"
          value={oneTodo}
          onChange={(e) => setOneTodo(e.target.value)}
        />
        <button
          onClick={() => {
            setTodos([oneTodo, ...todos]);
            setOneTodo("");
          }}
        >
          Add
        </button>
      </div>

      <div className="main">
        {todos.map((value, index) => {
          return (
            
            <div key={index}>
              <p>{value}</p>
              <button onClick={() => remove(index)}>Remove</button>
            </div>
          );
        })}
      </div>
    </div>
  );
}

import React from "react";
import { Routes, Route } from "react-router";
import { BrowserRouter, Link } from "react-router-dom";
import Counter from "./Counter";
import Todo from "./Todo";
import Words from "./Words";

export default function Router() {
  return (
    <div className="routing">
      <BrowserRouter>
        <div className="routing-links">
          <Link to="/">Home (TODO)</Link>
          <Link to="/api">WORDS (API)</Link>
          <Link to="/counter">COUNTER (za Mahira)</Link>
        </div>

        <Routes>
          <Route path="/" element={<Todo />} />
          <Route path="/api" element={<Words />} />
          <Route path="/counter" element={<Counter />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

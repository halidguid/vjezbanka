/*eslint-disable*/

import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import Words from "./Words";
import Todo from "./Todo";
import Counter from "./Counter";
import Router from "./Router";

ReactDOM.render(
  <React.StrictMode>
    <Router />
  </React.StrictMode>,
  document.getElementById("root")
);

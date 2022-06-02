import React from "react";
import ReactDOM from "react-dom/client";
import "normalize.css";
// normalize.css is a fancy way of
// *{
//   margin:0;
//   padding:0;
//   box-sizing:border-box;
// }
import "./index.css";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

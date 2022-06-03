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
import { PortfolioProvider } from "./context/portfolioContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <PortfolioProvider>
    <App />
  </PortfolioProvider>
);

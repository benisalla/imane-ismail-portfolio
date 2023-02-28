import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { ISIMControllerProvider } from "./context";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <ISIMControllerProvider>
    <React.StrictMode>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </React.StrictMode>
  </ISIMControllerProvider>
);

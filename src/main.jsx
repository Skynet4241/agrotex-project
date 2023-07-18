import "../node_modules/modern-normalize/modern-normalize.css";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter basename="agrotex-project">
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

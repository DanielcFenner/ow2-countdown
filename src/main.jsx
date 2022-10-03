import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App timeTillDate="10 03 2022, 8:00 pm" timeFormat="MM DD YYYY, h:mm a" />
  </React.StrictMode>
);

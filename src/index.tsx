import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import App from "./App";
import { ReduxProvider } from "./Redux/Store";
const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <ReduxProvider>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </ReduxProvider>
);

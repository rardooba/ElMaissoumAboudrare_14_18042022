import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

//Global CSS + PicoCss
import "@picocss/pico";
import "./index.css";

//ContextAPI > Provider
import { ContextProvider } from "./services/contextAPI";

//------------------------------------------------------------//

const root = ReactDOM.createRoot(document.getElementById("root"));

//------------------------------------------------------------//

root.render(
  <React.StrictMode>
    <ContextProvider>
      <App />
    </ContextProvider>
  </React.StrictMode>
);

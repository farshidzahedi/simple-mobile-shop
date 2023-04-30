import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import  ContextData  from "./Components/ContextData/ContextData";
// import { ContextData } from "./Components/ContextData/ContextData";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ContextData>
    <BrowserRouter>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </BrowserRouter>
  </ContextData>
);
reportWebVitals(console.log);
reportWebVitals();

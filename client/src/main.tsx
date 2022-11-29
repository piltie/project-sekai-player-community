import React from "react";
import ReactDOM from "react-dom/client";
import Routes from "./router";
import { BrowserRouter } from "react-router-dom";

import "./main.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes />
    </BrowserRouter>
  </React.StrictMode>
);

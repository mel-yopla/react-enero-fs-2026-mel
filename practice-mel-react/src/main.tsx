import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./jsx/App";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App>Hello World!</App>
  </StrictMode>,
);

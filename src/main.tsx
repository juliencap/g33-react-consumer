import { defineCustomElements } from "girondins33-design-system/loader";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

defineCustomElements(window, {
  resourcesUrl: "/build/girondins33-design-system/",
});

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);

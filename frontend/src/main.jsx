import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Router from "./routers/router.jsx";


createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Router>
    </Router>
  </StrictMode>
);

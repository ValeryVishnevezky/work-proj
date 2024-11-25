import { createRoot } from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import { App } from "../src/App.jsx";
import "../src/assets/main.scss";

createRoot(document.getElementById("root")).render(
    <Router>
      <App />
    </Router>
);

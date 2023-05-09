import React from "react";
import ReactDOM from "react-dom/client";
import { ThemeProvider } from "react-jss";
import { theme } from "./styles/themes/theme";
import App from "./App";
import "./styles/index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);

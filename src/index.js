import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { CssBaseline } from "@mui/material";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { LanguageProvider } from "./i18n";
import "./index.css";

const theme = createTheme({
  palette: {
    primary: { main: "#1976d2" },
    secondary: { main: "#10b981" },
  },
  components: {
    MuiButton: { defaultProps: { disableElevation: true } },
  },
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <LanguageProvider>
        <CssBaseline />
        <App />
      </LanguageProvider>
    </ThemeProvider>
  </React.StrictMode>
);

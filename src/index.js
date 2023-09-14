import { createTheme, CssBaseline, ThemeProvider } from "@mui/material";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));

const theme = createTheme({
  components: {
    MuiCssBaseline: {
      styleOverrides: () => ({
        body: {
          position: `relative`,
          width: `100%`,
          height: `100vh`,
          backgroundImage: `linear-gradient(135deg, #ff9a9e  10%, #F6416C 100%)`,
        },
        "#root": { height: `100vh` },
      }),
    },
  },
});

root.render(
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <App />
  </ThemeProvider>,
);

reportWebVitals();

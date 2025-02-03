import React from "react";
import ReactDOM from "react-dom";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { CacheProvider } from "@emotion/react";
import createCache from "@emotion/cache";
import App from "./App";
import stylisRTLPlugin from "stylis-plugin-rtl";
import { BrowserRouter } from "react-router-dom";

// Create an RTL cache
const rtlCache = createCache({
  key: "mui-rtl",
  stylisPlugins: [(...args) => stylisRTLPlugin(...args)], // Add Stylis plugin for RTL
});

// Custom theme with RTL
const rtlTheme = createTheme({
  direction: "rtl", // Right-to-left direction
  // typography: {
  //   fontFamily: "Cairo, sans-serif", // Set a font that supports Arabic
  // },
  // palette: {
  //   primary: {
  //     main: "#1976d2",
  //   },
  //   secondary: {
  //     main: "#dc004e",
  //   },
  // },
});

ReactDOM.render(
  <BrowserRouter>
    <CacheProvider value={rtlCache}>
      <ThemeProvider theme={rtlTheme}>
        <CssBaseline />
        <div dir="rtl">
          <App />
        </div>
      </ThemeProvider>
    </CacheProvider>
  </BrowserRouter>,
  document.getElementById("root")
);

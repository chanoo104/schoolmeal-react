import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { createTheme, ThemeProvider } from "@material-ui/core";
import { koKR } from "@material-ui/core/locale";
import "./index.css";

const theme = createTheme(
    {
        palette: {
            type: "dark",
        },
    },
    koKR
);

ReactDOM.render(
    <React.StrictMode>
        <ThemeProvider theme={theme}>
            <App />
        </ThemeProvider>
    </React.StrictMode>,
    document.getElementById("root")
);

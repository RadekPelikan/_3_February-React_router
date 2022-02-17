import React from "react";
import ReactDOM from "react-dom";
import { MantineProvider } from "@mantine/core";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App";

import "./css/index.css";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <MantineProvider theme={{ colorScheme: "dark" }} withGlobalStyles>
        <App />
      </MantineProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);

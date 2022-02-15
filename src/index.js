import React from "react";
import ReactDOM from "react-dom";
import { MantineProvider } from "@mantine/core";
import App from "./App";

import "./css/index.css";

ReactDOM.render(
  <React.StrictMode>
    <MantineProvider theme={{ colorScheme: "dark" }} withGlobalStyles>
      <App />
    </MantineProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

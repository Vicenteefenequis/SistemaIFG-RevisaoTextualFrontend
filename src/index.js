import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Router from "./Router";
import { CssBaseline, Container } from "@material-ui/core";

ReactDOM.render(
  <React.StrictMode>
    <CssBaseline />
    <Container maxWidth="100vw" className="main-container">
      <Router />
    </Container>
  </React.StrictMode>,
  document.getElementById("root")
);

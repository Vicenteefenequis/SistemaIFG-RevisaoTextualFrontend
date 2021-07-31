import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Router from "./Router";
import { CssBaseline, Container } from "@material-ui/core";
import { AuthContextProvider } from "./hooks/useAuth";

ReactDOM.render(
  <React.StrictMode>
    <AuthContextProvider>
      <CssBaseline />
      <Container maxWidth="100vw" className="main-container">
        <Router />
      </Container>
    </AuthContextProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

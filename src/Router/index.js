import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "../Screen/Home";

import Servico from "../Screen/Servico";
import SignIn from "../Screen/SignIn";
import SignUp from "../Screen/SignUp";

const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/servico">
          <Servico />
        </Route>
        <Route path="/entrar">
          <SignIn />
        </Route>
        <Route path="/registrar">
          <SignUp />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default Router;

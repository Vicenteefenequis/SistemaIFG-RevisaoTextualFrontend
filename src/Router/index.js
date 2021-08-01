import React from "react";
import { BrowserRouter, Switch } from "react-router-dom";
import Route from "./custom.route";
import Home from "../Screen/Home";

import Servico from "../Screen/Servico";
import SignIn from "../Screen/SignIn";
import SignUp from "../Screen/SignUp";
import CentralCliente from "../Screen/CentralCliente";
import Contato from "../Screen/Contato";

const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route component={Home} path="/" exact />
        <Route component={Servico} path="/servico" />
        <Route component={CentralCliente} path="/cliente" isPrivate />
        <Route component={SignIn} path="/entrar" />
        <Route component={SignUp} path="/registrar" />
        <Route component={Contato} path="/contato"/>
      </Switch>
    </BrowserRouter>
  );
};

export default Router;

import React from "react";
import { BrowserRouter, Switch } from "react-router-dom";
import Route from "./custom.route";
import Home from "../Screen/Home";

import Servico from "../Screen/Servico";
import SignIn from "../Screen/SignIn";
import SignUp from "../Screen/SignUp";
import CentralCliente from "../Screen/CentralCliente";
import Pagamento from "../Screen/Pagamento";
import { BudgetContextProvider } from "../hooks/useBudget";
import Contato from "../Screen/Contato";

const Router = () => {
  return (
    <BrowserRouter>
      <BudgetContextProvider>
        <Switch>
          <Route component={Home} path="/" exact />
          <Route component={Servico} path="/servico" />
          <Route component={CentralCliente} path="/cliente" isPrivate />
          <Route component={Pagamento} path="/pagamento/:id" isPrivate />
          <Route component={Contato} path="/contato" />
          <Route component={SignIn} path="/entrar" />
          <Route component={SignUp} path="/registrar" />
        </Switch>
      </BudgetContextProvider>
    </BrowserRouter>
  );
};

export default Router;

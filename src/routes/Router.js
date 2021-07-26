import React from 'react';
import { Route, BrowserRouter } from "react-router-dom";
import SignIn from '../screen/SignIn'
import Cadastrar from '../screen/Cadastrar'
import Home from '../screen/Home';
import Servicos from '../screen/Servicos';


const Router = () => {
  return (
    <BrowserRouter>
      <Route component={Home} path="/" exact/>
      <Route component={SignIn} path="/login" exact/>
      <Route component={Cadastrar} path="/cadastrar"/>
      <Route component={Servicos} path="/servicos"/>
    </BrowserRouter>
  );
}

export default Router;
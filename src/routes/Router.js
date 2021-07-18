import React from 'react';
import { Route, BrowserRouter } from "react-router-dom";
import SignIn from '../screen/SignIn'
import Dashboard from '../screen/Dashboard'
import Home from '../screen/Home';


const Router = () => {
  return (
    <BrowserRouter>
      <Route component={Home} path="/" exact/>
      <Route component={SignIn} path="/login" exact/>
      <Route component={Dashboard} path="/dashboard"/>
    </BrowserRouter>
  );
}

export default Router;
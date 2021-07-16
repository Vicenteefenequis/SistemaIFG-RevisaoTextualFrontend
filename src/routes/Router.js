import React from 'react';
import { Route, BrowserRouter } from "react-router-dom";
import SignIn from '../screen/SignIn'
import Dashboard from '../screen/Dashboard'


const Router = () => {
  return (
    <BrowserRouter>
      <Route component={SignIn} path="/" exact/>
      <Route component={Dashboard} path="/dashboard"/>
    </BrowserRouter>
  );
}

export default Router;
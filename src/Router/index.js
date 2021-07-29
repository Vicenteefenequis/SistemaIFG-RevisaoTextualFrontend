import React from "react";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import Home from "../Screen/Home";
import Header from "../Components/Header";
import Footer from "../Components/Footer";

const Router = () => {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
      <Footer />
    </BrowserRouter>
  );
};

export default Router;

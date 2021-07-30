import React from "react";
import { Grid } from "@material-ui/core";
import Footer from "./Footer";
import Header from "./Header";

const DefaultLayout = ({ children }) => {
  return (
    <Grid
      container
      xs={12}
      display="grid"
      gridTemplateRows="64px auto 87px"
      minHeight="100vh"
    >
      <Header />
      <Grid container item xs={12}>
        {children}
      </Grid>
      <Footer />
    </Grid>
  );
};

export default DefaultLayout;

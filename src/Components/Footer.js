import React from "react";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";

function Copyright() {
  return (
    <Typography variant="body2" color="white" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://material-ui.com/">
        Revisao textual
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const Footer = () => {
  return (
    <footer>
      <Container sx={{ backgroundColor: "#000" }} maxWidth="xl">
        <Typography color="white" variant="h6" align="center" gutterBottom>
          Revisão Textual
        </Typography>
        <Typography
          color="white"
          variant="subtitle1"
          align="center"
          component="p"
        >
          Empresa Criada por Vicente e Witney
        </Typography>
        <Copyright />
      </Container>
    </footer>
  );
};

export default Footer;

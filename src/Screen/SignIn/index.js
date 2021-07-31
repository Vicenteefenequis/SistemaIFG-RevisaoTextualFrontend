import React from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import DefaultLayout from "../../Components/DefaultLayout";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import Link from "@material-ui/core/Link";
import { Link as LinkRoute, Redirect } from "react-router-dom";
import { useSignInHelper } from "./helper";

export default function SignIn() {
  const { setNomeUsuario, setSenha, senha, nomeUsuario, handleSubmit, token } =
    useSignInHelper();

  if (token) {
    return <Redirect to="/cliente" />;
  }

  return (
    <DefaultLayout>
      <Box
        mt={5}
        display="flex"
        flexDirection="column"
        alignItems="center"
        width="100%"
      >
        <Avatar>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Loguin
        </Typography>
        <form onSubmit={handleSubmit} noValidate>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            onChange={(event) => setNomeUsuario(event.target.value)}
            value={nomeUsuario}
            id="nomeUsuario"
            label="Nome de Usuario"
            name="nomeUsuario"
            autoFocus
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            onChange={(event) => setSenha(event.target.value)}
            value={senha}
            name="senha"
            label="Senha"
            type="password"
            id="senha"
            autoComplete="current-password"
          />

          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            sx={{ mt: 5 }}
          >
            Logar
          </Button>
          <Grid container>
            <Grid item xs>
              <Link to="/registrar" variant="body2" component={LinkRoute}>
                Não tem conta? Registrar
              </Link>
            </Grid>
          </Grid>
        </form>
      </Box>
    </DefaultLayout>
  );
}

import React from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import DefaultLayout from "../../Components/DefaultLayout";
import Grid from "@material-ui/core/Grid";
import Link from "@material-ui/core/Link";
import Box from "@material-ui/core/Box";
import { Link as LinkRoute } from "react-router-dom";
import { useSignupHelper } from "./helper";

export default function SignIn() {
  const {
    senha,
    setNome,
    setNomeUsuario,
    nomeUsuario,
    nome,
    handleSubmit,
    setSenha,
  } = useSignupHelper();

  return (
    <DefaultLayout>
      <Box
        mt={5}
        mb={5}
        display="flex"
        flexDirection="column"
        alignItems="center"
        width="100%"
      >
        <Avatar>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Cadastrar
        </Typography>
        <form onSubmit={handleSubmit} noValidate>
          <TextField
            variant="outlined"
            margin="normal"
            onChange={(e) => setNome(e.target.value)}
            value={nome}
            required
            fullWidth
            id="nome"
            label="Nome Completo"
            name="nome"
            autoFocus
          />
          <TextField
            variant="outlined"
            margin="normal"
            onChange={(e) => setNomeUsuario(e.target.value)}
            value={nomeUsuario}
            required
            fullWidth
            id="nomeUsuario"
            label="Nome de Usuario"
            name="nomeUsuario"
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            onChange={(e) => setSenha(e.target.value)}
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
            Cadastrar-se
          </Button>
          <Grid container>
            <Grid item xs>
              <Link to="/entrar" variant="body2" component={LinkRoute}>
                Ja tem uma conta? Logar
              </Link>
            </Grid>
          </Grid>
        </form>
      </Box>
    </DefaultLayout>
  );
}

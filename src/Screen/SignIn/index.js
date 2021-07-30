import React from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import DefaultLayout from "../../Components/DefaultLayout";
import Box from "@material-ui/core/Box";

export default function SignIn() {
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
        <form noValidate>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
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
        </form>
      </Box>
    </DefaultLayout>
  );
}

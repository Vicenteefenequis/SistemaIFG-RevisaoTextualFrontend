import { useCallback, useState } from "react";
import { useAuth } from "../../hooks/useAuth";
import { useHistory } from "react-router-dom";

export function useSignInHelper() {
  const history = useHistory();
  const { handleSignIn, token } = useAuth();
  const [nomeUsuario, setNomeUsuario] = useState("");
  const [senha, setSenha] = useState("");

  const handleSubmit = useCallback(
    async (event) => {
      event.preventDefault();
      try {
        await handleSignIn(nomeUsuario, senha);
        history.push("/cliente");
      } catch {}
    },
    [nomeUsuario, senha, handleSignIn, history]
  );

  return {
    nomeUsuario,
    setNomeUsuario,
    senha,
    setSenha,
    handleSubmit,
    token,
  };
}

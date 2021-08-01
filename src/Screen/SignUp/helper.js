import { useCallback, useState } from "react";
import { useHistory } from "react-router-dom";
import { apiRevisaoTextual } from "../../config/api";

export function useSignupHelper() {
  const history = useHistory();
  const [nomeUsuario, setNomeUsuario] = useState("");
  const [nome, setNome] = useState("");
  const [senha, setSenha] = useState("");

  const handleSubmit = useCallback(
    async (event) => {
      event.preventDefault();
      try {
        const response = await apiRevisaoTextual.post("/user", {
          nome,
          nomeUsuario,
          senha,
        });
        alert(response.data.message);
        history.push("/entrar");
      } catch {}
    },
    [nomeUsuario, senha, history, nome]
  );

  return {
    nomeUsuario,
    setNomeUsuario,
    senha,
    setSenha,
    handleSubmit,
    nome,
    setNome,
  };
}

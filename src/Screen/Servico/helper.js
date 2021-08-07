import { useEffect, useState } from "react";

import { apiRevisaoTextual } from "../../config/api";

export function convertCurrency(valor) {
  return new Intl.NumberFormat("pt-br", {
    style: "currency",
    currency: "BRL",
  }).format(valor);
}

export function useServicoHelper() {
  const [employs, setEmploys] = useState([]);

  useEffect(() => {
    apiRevisaoTextual.get("/employ").then((response) => {
      const employers = response.data.data.map((res) => {
        const valores = new Map();
        valores.set("lauda", convertCurrency(res.valorLauda));
        valores.set("palavra", convertCurrency(res.valorPalavra));
        valores.set("pagina", convertCurrency(res.valorPagina));

        return {
          nome: res.nome,
          descricao: res.descricao,
          valores,
        };
      });
      setEmploys(employers);
    });
  }, []);

  return {
    employs,
  };
}

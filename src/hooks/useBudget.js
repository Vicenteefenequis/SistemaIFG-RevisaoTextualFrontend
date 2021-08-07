import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";
import { apiRevisaoTextual } from "../config/api";
import { useAuth } from "./useAuth";
import { useHistory } from "react-router-dom";

function formatService(service) {
  return {
    label: service.nome,
    isActive: false,
    id: service.id,
  };
}

const BudgetContext = createContext(null);

export function BudgetContextProvider({ children }) {
  const [metadata, setMetadata] = useState({
    palavaras: "",
    laudas: "",
    paginas: "",
    urlArquivoCliente: "",
  });
  const history = useHistory();

  const [isFileSend, setIsFileSend] = useState(false);
  const [sendBudget, setSendBudget] = useState(false);
  const [budget, setBudget] = useState({});
  const [boleto, setBoleto] = useState("");

  const [tiposPagamento, setTiposPagamento] = useState([]);
  const [tipoPagamento, setTipoPagamento] = useState(0);
  const [servicos, setServicos] = useState([]);
  const { user } = useAuth();

  const handleChangeService = useCallback((name) => {
    setServicos((oldService) => {
      return oldService.map((service) =>
        service.id.toString() === name
          ? { ...service, isActive: !service.isActive }
          : service
      );
    });
  }, []);

  const handleChangeUploadFile = useCallback((event) => {
    if (event.target.files) {
      const form = new FormData();

      form.append("file", event.target.files[0]);
      apiRevisaoTextual.post("/budget/upload", form).then((response) => {
        const { data } = response.data;

        setMetadata({
          palavras: data.palavras,
          laudas: data.laudas,
          paginas: data.paginas,
          urlArquivoCliente: data.filename,
        });
        setIsFileSend(true);
      });
    }
  }, []);

  const handleUpdateBudget = useCallback(async () => {
    try {
      const response = await apiRevisaoTextual.put(`/budget/${budget.id}`, {
        tipoPagamento: {
          id: tipoPagamento,
        },
        status: "solicitado",
      });

      const responseTransaction = await apiRevisaoTextual.post("/transaction", {
        valorTotal:
          budget["valor" + tiposPagamento[tipoPagamento - 1].tipoPagamento],
        tipoPagamento: "boleto",
        status: "solicitado",
        orcamento: { id: budget.id },
      });
      setBoleto(responseTransaction.data.data.linkReimpressao);
      history.push(`/pagamento/${response.data.data.id}`);
      alert("Serviço solicitado com sucesso");
    } catch {}
  }, [history, budget, tiposPagamento, tipoPagamento]);

  const handleCreateBudget = useCallback(async () => {
    const response = await apiRevisaoTextual.post("/budget", {
      usuario: {
        id: user?.id,
      },
      tipoPagamento: {
        id: tipoPagamento,
      },
      servicos: servicos.flatMap((servico) =>
        servico.isActive ? { id: servico.id } : []
      ),
      numeroPagina: metadata.paginas,
      numeroLauda: metadata.laudas,
      numeroPalavra: metadata.palavras,
      urlArquivoCliente: metadata.urlArquivoCliente,
    });
    setSendBudget(true);
    setBudget(response.data.data);
  }, [user?.id, tipoPagamento, servicos, metadata]);

  const handleSubmitButtonBudget = useCallback(async () => {
    if (!sendBudget) await handleCreateBudget();
    else await handleUpdateBudget();
  }, [sendBudget, handleUpdateBudget, handleCreateBudget]);

  useEffect(() => {
    apiRevisaoTextual.get("/employ").then((response) => {
      setServicos(response.data.data.map(formatService));
    });
  }, []);
  useEffect(() => {
    apiRevisaoTextual
      .get("/payment-type")
      .then((response) => {
        setTiposPagamento(response.data.data);
        setTipoPagamento(
          response.data.data.find((tipoPagamento) =>
            new RegExp("palavra", "gi").test(tipoPagamento.tipoPagamento)
          )?.id || 1
        );
      })
      .catch((err) => alert(err));
  }, [setTipoPagamento, setTiposPagamento]);

  return (
    <BudgetContext.Provider
      value={{
        metadata,
        setMetadata,
        handleChangeService,
        handleChangeUploadFile,
        handleSubmitButtonBudget,
        setTipoPagamento,
        setTiposPagamento,
        servicos,
        isFileSend,
        tiposPagamento,
        tipoPagamento,
        sendBudget,
        budget,
        boleto,
      }}
    >
      {children}
    </BudgetContext.Provider>
  );
}

export function useBudget() {
  const context = useContext(BudgetContext);
  return context;
}

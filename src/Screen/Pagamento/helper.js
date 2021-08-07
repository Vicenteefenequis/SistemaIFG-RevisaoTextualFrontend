import { useCallback, useEffect, useState } from "react";
import { apiRevisaoTextual } from "../../config/api";
import { useBudget } from "../../hooks/useBudget";

export function usePagamentoHelper(idOrcamento) {
  const { boleto } = useBudget();
  const [orcamento, setOrcamento] = useState({});
  const [openModal, setOpenModal] = useState(false);

  const handleOpenModal = useCallback(() => {
    setOpenModal(true);
  }, []);
  const handleCloseModal = useCallback(() => {
    setOpenModal(false);
  }, []);

  useEffect(() => {
    apiRevisaoTextual.get(`/budget/${idOrcamento}`).then((response) => {
      setOrcamento(response.data.data);
    });
  }, [idOrcamento]);

  return { orcamento, boleto, handleOpenModal, handleCloseModal, openModal };
}

import { Grid, Button } from "@material-ui/core";
import React from "react";
import { useHistory, useParams } from "react-router";
import DefaultLayout from "../../Components/DefaultLayout";
import { usePagamentoHelper } from "./helper";
import { convertCurrency } from "../Servico/helper";
import Typography from "@material-ui/core/Typography";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";

const Pagamento = () => {
  const { id } = useParams();
  const history = useHistory();
  const { orcamento, boleto, handleOpenModal, handleCloseModal, openModal } =
    usePagamentoHelper(id);
  return (
    <DefaultLayout>
      <Grid
        container
        display="grid"
        alignItems="center"
        justifyItems="center"
        flexDirection="column"
      >
        <Typography variant="h4" component="h1" textAlign="center">
          Realize o pagamento
        </Typography>

        <Typography variant="p" component="p">
          Boleto valor Total ={" "}
          {convertCurrency(
            orcamento[`valor` + orcamento?.tipoPagamento?.tipoPagamento]
          )}
        </Typography>
        <Button
          onClick={handleOpenModal}
          variant="contained"
          sx={{ backgroundColor: "#8C30F5" }}
        >
          <a rel="noreferrer" target="_blank" href={boleto}>
            Pagar
          </a>
        </Button>
      </Grid>
      <Dialog
        open={openModal}
        onClose={handleCloseModal}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Você gerou o boleto para pagamento dos nossos serviços"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Realize o pagamento e entraremos em contato para realização da
            devolução dos serviços requisitados por nossa plataforma, Por favor
            Entre em contato caso demore mais de 15 dias da realização do
            pagamento.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button
            onClick={() => {
              handleCloseModal();
              history.push("/");
            }}
            color="primary"
          >
            Voltar para Home
          </Button>
          <Button
            onClick={() => {
              handleCloseModal();
              history.push("/cliente");
            }}
            color="primary"
            autoFocus
          >
            Voltar para Central do cliente
          </Button>
        </DialogActions>
      </Dialog>
    </DefaultLayout>
  );
};

export default Pagamento;

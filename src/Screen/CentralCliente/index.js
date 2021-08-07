import React from "react";
import DefaultLayout from "../../Components/DefaultLayout";
import {
  Typography,
  Grid,
  Box,
  FormControl,
  FormControlLabel,
  Checkbox,
  FormGroup,
  RadioGroup,
  Radio,
  Button,
} from "@material-ui/core";
import FolderIcon from "../../assets/folder.png";
import { useBudget } from "../../hooks/useBudget";
import { convertCurrency } from "../Servico/helper";

const CentralCliente = () => {
  const {
    handleChangeUploadFile,
    handleChangeService,
    servicos,
    handleSubmitButtonBudget,
    isFileSend,
    sendBudget,
    budget,
    tiposPagamento,
    tipoPagamento,
    setTipoPagamento,
  } = useBudget();

  return (
    <DefaultLayout>
      <Grid
        container
        display="grid"
        alignItems="center"
        justifyContent="center"
      >
        <Typography variant="h4" component="h2" justifySelf="center" mb={5}>
          Solicite Seu orçamento
        </Typography>
        <Grid
          container
          item
          display="grid"
          xs={12}
          gridTemplateColumns={{
            xs: "auto",
            sm: "auto",
            md: "repeat(3,1fr)",
            lg: "repeat(3,1fr)",
          }}
          gap={5}
          maxWidth="1200px"
          gridAutoRows="min-content"
          alignItems="center"
          justifyContent="center"
        >
          <Grid item display="flex" htmlFor="INPUT_FILE" sx={{ float: "left" }}>
            <label
              htmlFor="INPUT_FILE"
              style={{
                cursor: !isFileSend ? "pointer" : "not-allowed",
                position: "relative",
              }}
            >
              <img
                src={FolderIcon}
                width={160}
                height={120}
                alt="Folder icone"
              />
              <Box position="absolute" top={20} p={2} left={0} right={0}>
                <Typography variant="p" component="h5" color="white">
                  {isFileSend ? "Projeto" : "Envie seu Projeto"}
                </Typography>
                <Typography variant="p" component="p" color="white">
                  {isFileSend
                    ? "Arquivo enviado"
                    : "Clique aqui ou arraste e solte"}
                </Typography>
              </Box>
            </label>

            <input
              type="file"
              name="photo"
              id="INPUT_FILE"
              required
              accept="application/pdf"
              style={{ display: "none" }}
              disabled={isFileSend}
              onChange={handleChangeUploadFile}
            />
          </Grid>
          <Grid item>
            <FormControl component="fieldset" variant="standard">
              <FormGroup>
                {servicos.map((service) => {
                  return (
                    <FormControlLabel
                      key={service.id.toString()}
                      control={
                        <Checkbox
                          value={service.isActive}
                          onChange={(e) => handleChangeService(e.target.name)}
                          name={service.id.toString()}
                          disabled={sendBudget}
                        />
                      }
                      label={service.label}
                    />
                  );
                })}
              </FormGroup>
            </FormControl>
          </Grid>
          <Grid item>
            <FormControl component="fieldset">
              <RadioGroup
                aria-label="valores"
                name="radio-buttons-group"
                value={tipoPagamento}
                onChange={(e) => setTipoPagamento(+e.target.value)}
              >
                {tiposPagamento.map((pagamento) => {
                  const label = sendBudget
                    ? `${pagamento.tipoPagamento} - ${convertCurrency(
                        budget[`valor` + pagamento.tipoPagamento]
                      )}`
                    : pagamento.tipoPagamento;
                  return (
                    <FormControlLabel
                      key={pagamento.id.toString()}
                      value={pagamento.id}
                      control={<Radio />}
                      label={label}
                      checked={pagamento.id === tipoPagamento}
                    />
                  );
                })}
              </RadioGroup>
            </FormControl>
          </Grid>
        </Grid>
        <Box justifySelf="center" mb={5} mt={5}>
          <Button
            onClick={handleSubmitButtonBudget}
            variant="contained"
            sx={{ backgroundColor: "#8C30F5" }}
          >
            {!sendBudget ? "Solicite orçamento" : "Requisitar Serviço"}
          </Button>
        </Box>
      </Grid>
    </DefaultLayout>
  );
};

export default CentralCliente;

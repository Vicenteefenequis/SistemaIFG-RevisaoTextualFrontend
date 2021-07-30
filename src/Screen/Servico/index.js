import { Typography, Grid, Box, Button } from "@material-ui/core";
import React from "react";
import DefaultLayout from "../../Components/DefaultLayout";
import { ArrowRight } from "@material-ui/icons";

const Servico = () => {
  return (
    <DefaultLayout>
      <Grid
        display="grid"
        container
        xs={12}
        sx={{ backgroundColor: "#0B0D17" }}
      >
        <Box justifySelf="center" maxWidth="50%">
          <Typography
            variant="h4"
            component="h1"
            textAlign="center"
            color="white"
          >
            Servicos que disponibilizamos aos nossos clientes
          </Typography>
        </Box>
        <Grid
          display="grid"
          container
          xs={12}
          mb={5}
          mt={5}
          pl={3}
          pr={3}
          gridTemplateColumns={{
            xs: "auto",
            sm: "repeat(2,auto)",
            md: "repeat(2,auto)",
            lg: "repeat(4,auto)",
          }}
          gap={2}
        >
          <Box sx={{ backgroundColor: "white", borderRadius: 4 }}>
            <Box ml={2} mt={5}>
              <Typography variant="h6" component="h1">
                Edição/Formatação
              </Typography>

              <Typography variant="p" component="p">
                Prepara, de acordo com as normas editoriais, um texto ou uma
                seleção de textos, com ações de padronização de fonte, inserção
                de índice, formatação etc. Cada tipo de revisão requer um
                tratamento distinto e, dessa forma, é cobrado de forma
                diferente.
              </Typography>
              <Box mt={3}>
                <Typography variant="p" component="p">
                  Lauda: R$ 10
                </Typography>
                <Typography variant="p" component="p">
                  Pagina: R$ 10
                </Typography>
                <Typography variant="p" component="p">
                  Palabra: R$ 0.80
                </Typography>
              </Box>
              <Button
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  marginTop: 20,
                  marginBottom: 20,
                }}
              >
                <Typography
                  variant="p"
                  component="p"
                  color="#8C30F5"
                  textAlign="center"
                >
                  Solicite
                </Typography>
                <ArrowRight />
              </Button>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </DefaultLayout>
  );
};

export default Servico;

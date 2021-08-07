import { Typography, Grid, Box, Button } from "@material-ui/core";
import React from "react";
import DefaultLayout from "../../Components/DefaultLayout";
import { ArrowRight } from "@material-ui/icons";
import { useServicoHelper } from "./helper";
import { useHistory } from "react-router";

const Servico = () => {
  const { employs } = useServicoHelper();
  return (
    <DefaultLayout>
      <Grid
        display="grid"
        container
        xs={12}
        sx={{ backgroundColor: "#0B0D17" }}
      >
        <Box alignSelf="center" justifySelf="center" maxWidth="50%">
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
          p={5}
          gridTemplateColumns={{
            xs: "auto",
            sm: "repeat(2,1fr)",
            md: "repeat(2,1fr)",
            lg: "repeat(4,1fr)",
          }}
          gap={2}
        >
          {employs.map((employ) => (
            <CardService
              title={employ.nome}
              description={employ.descricao}
              values={employ.valores}
            />
          ))}
        </Grid>
      </Grid>
    </DefaultLayout>
  );
};

const CardService = ({ title, description, values }) => {
  const history = useHistory();
  return (
    <Box
      sx={{
        display: "flex",
        backgroundColor: "white",
        borderRadius: 4,
        justifyContent: "center",
        alignItems: "center",
        padding: 4,
      }}
    >
      <Box>
        <Typography variant="h6" component="h1">
          {title}
        </Typography>

        <Typography variant="p" component="p">
          {description}
        </Typography>
        <Box mt={3}>
          <Typography variant="p" component="p">
            Lauda: R$ {values.get("lauda")}
          </Typography>
          <Typography variant="p" component="p">
            Pagina: R$ {values.get("pagina")}
          </Typography>
          <Typography variant="p" component="p">
            Palavra: R$ {values.get("palavra")}
          </Typography>
        </Box>
        <Button
          onClick={() => history.push("/cliente")}
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
  );
};

export default Servico;

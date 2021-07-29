import React from "react";
import EditoraImage from "../../assets/Editora.png";
import { Hidden, Grid, Typography, Button, Box } from "@material-ui/core";
import OrcamentoImage from "../../assets/01.png";
import BoletoImage from "../../assets/04.png";
import LocalidadeImage from "../../assets/05.png";
import ClientesImage from "../../assets/07.png";

const Home = () => {
  return (
    <div style={{ marginBottom: 50 }}>
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <Hidden xlDown>
            <div
              style={{
                position: "absolute",
                top: "-10%",
                right: "-10%",
                bottom: 0,
                width: 740,
                height: 740,
                background: "#8C30F5",
                borderRadius: 500,
              }}
            >
              <img
                src={EditoraImage}
                width={700}
                height={700}
                alt="A editora"
                style={{
                  position: "absolute",
                  right: "30%",
                  bottom: "-7%",
                  objectFit: "scale-down",
                }}
              />

              <div
                style={{
                  position: "absolute",
                  left: "20%",
                  bottom: "-20%",
                  width: 70,
                  height: 70,
                  borderRadius: 50,
                  backgroundColor: "#75E3EA",
                }}
              />
            </div>
          </Hidden>
        </Grid>
        <Grid
          item
          xs={6}
          lg={6}
          sx={{ display: "flex", height: "100vh", marginLeft: 10 }}
          alignItems="center"
          flexDirection="column"
          justifyContent="center"
        >
          <div>
            <Typography variant="h2" component="h1" gutterBottom>
              A Revisora
            </Typography>
            <Typography variant="p" component="p" gutterBottom>
              Revisão linguística e revisão técnica
            </Typography>
            <Button variant="contained" color="secondary" sx={{ marginTop: 5 }}>
              Solicite um orçamento
            </Button>
          </div>
        </Grid>
      </Grid>
      <Grid
        container
        justifyContent="center"
        alignItems="center"
        flexDirection="column"
      >
        <Typography variant="h2" component="h1" gutterBottom>
          Sobre a empresa
        </Typography>
        <Grid
          container
          justifyContent="space-between"
          alignItems="center"
          flexDirection="row"
        >
          <CardAbout
            title="Orcamento"
            description=" Solicite um orçamento totalmente gratuito"
            image={OrcamentoImage}
          />
          <CardAbout
            title="Formas de Pagamentos"
            description="Somente Boleto"
            image={BoletoImage}
          />
          <CardAbout
            title="Localidade"
            description="Localizada em Goianiâ,  Goiás"
            image={LocalidadeImage}
          />
          <CardAbout
            title="Clientes"
            description="Atendemos os 
          melhores"
            image={ClientesImage}
          />
        </Grid>
      </Grid>
    </div>
  );
};

const CardAbout = ({ title, description, image }) => {
  return (
    <Box
      flexDirection="column"
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: 255,
        height: 212,
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: 70,
          height: 70,
          marginBottom: 2,
          borderRadius: 50,
          bgcolor: "#F4F5F7",
        }}
      >
        <img src={image} alt="A editora" />
      </Box>
      <Typography variant="h6" component="h6" gutterBottom>
        {title}
      </Typography>
      <Typography variant="p" textAlign="center" component="p" gutterBottom>
        {description}
      </Typography>
    </Box>
  );
};

export default Home;

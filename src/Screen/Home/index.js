import React from "react";
import EditoraImage from "../../assets/Editora.png";
import { Hidden, Grid, Typography, Button, Box } from "@material-ui/core";
import OrcamentoImage from "../../assets/01.png";
import BoletoImage from "../../assets/04.png";
import LocalidadeImage from "../../assets/05.png";
import ClientesImage from "../../assets/07.png";
import DefaultLayout from "../../Components/DefaultLayout";

const Home = () => {
  return (
    <DefaultLayout>
      <Grid container>
        <Grid
          item
          xs={12}
          md={12}
          lg={4}
          xl={6}
          sx={{ height: "100vh" }}
          display="grid"
          alignItems="center"
          justifyContent="center"
        >
          <Box>
            <Typography variant="h2" component="h1" gutterBottom>
              A Revisora
            </Typography>
            <Typography variant="p" component="p" gutterBottom>
              Revisão linguística e revisão técnica
            </Typography>
            <Button variant="contained" color="secondary" sx={{ marginTop: 5 }}>
              Solicite um orçamento
            </Button>
          </Box>
        </Grid>
        <Hidden lgDown>
          <Grid item xs={12} md={6}>
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
          </Grid>
        </Hidden>
      </Grid>
      <Grid
        container
        justifyContent="center"
        gridTemplateColumns="auto"
        display="grid"
      >
        <Typography textAlign="center" variant="h2" component="h1" gutterBottom>
          Sobre a empresa
        </Typography>
        <Grid
          item
          display="grid"
          gridTemplateColumns={{
            sm: "auto",
            md: "repeat(2,1fr)",
            lg: "repeat(4,1fr)",
          }}
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
    </DefaultLayout>
  );
};

const CardAbout = ({ title, description, image }) => {
  return (
    <Grid
      item
      xs={12}
      display="grid"
      gridTemplateColumns="auto"
      gridTemplateRows="80px auto auto"
      height="220px"
      alignItems="center"
      justifyContent="center"
    >
      <Box sx={{ alignSelf: "center", justifySelf: "center" }}>
        <img src={image} alt="A editora" />
      </Box>
      <Typography variant="h6" component="h6" textAlign="center" gutterBottom>
        {title}
      </Typography>
      <Typography variant="p" textAlign="center" component="p" gutterBottom>
        {description}
      </Typography>
    </Grid>
  );
};

export default Home;

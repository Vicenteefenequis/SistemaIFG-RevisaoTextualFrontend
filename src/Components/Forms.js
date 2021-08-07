import React from "react";
import { Typography, Grid, Card, CardContent, TextField, Button } from "@material-ui/core";
import { Box } from "@material-ui/system";
import ContactMailIcon from '@material-ui/icons/ContactMail';
import Avatar from "@material-ui/core/Avatar";




const Forms = () => {
    return (

        <Box
        mt={5}
        mb={5}
        display="flex"
        flexDirection="column"
        alignItems="center"
        width="100%"
        
        >
            <Avatar >
                <ContactMailIcon/>
            </Avatar>
           
            <Typography gutterBottom variant="h5" align="center" color="#8C30F5">
                Contato
            </Typography>
            <Grid>
                <Card style={{ maxWidth: 500, padding: "20px 5 px", margin: "0 auto" }} >
                    <CardContent>
                        <Typography gutterBottom variant="h5">
                            Envie suas dúvidas!
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p" gutterBottom>
                            Preencha o formulário e nossa equipe entrará em contato com você em 24 horas.
                        </Typography>
                        <form>
                            <Grid container spacing={1}>
                                <Grid xs={12} sm={6} item>
                                    <TextField placeholder="Coloque seu primeiro nome" label="Primeiro Nome" variant="outlined" fullWidth required />
                                </Grid>
                                <Grid xs={12} sm={6} item>
                                    <TextField placeholder="Coloque seu sobrenome" label="Sobrenome" variant="outlined" fullWidth required />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField type="email" placeholder="Coloque seu email" label="Email" variant="outlined" fullWidth required />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField type="number" placeholder="Coloque seu telefone" label="Telefone" variant="outlined" fullWidth required />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField label="Mensagem" multiline rows={4} placeholder="Escreva sua mensagem aqui" variant="outlined" fullWidth required />
                                </Grid>
                                <Grid item xs={12}>
                                    <Button type="submit" variant="contained" color="primary" fullWidth>Enviar</Button>
                                </Grid>

                            </Grid>
                        </form>
                    </CardContent>
                </Card>
            </Grid>
        </Box>
    );
}

export default Forms;
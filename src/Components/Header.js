import React, { useCallback, useState } from "react";
import {
  AppBar,
  Box,
  IconButton,
  Toolbar,
  Typography,
  useMediaQuery,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import List from "@material-ui/core/List";
import { Hidden } from "@material-ui/core";
import { Link } from "react-router-dom";

const ItemsNavigator = [
  {
    route: "/",
    label: "Apresentação",
  },
  {
    route: "/cliente",
    label: "Central do cliente",
  },
  {
    route: "/servico",
    label: "Serviços",
  },
  {
    route: "/contato",
    label: "Contato",
  },
  {
    route: "/cadastro",
    label: "Cadastra-se",
  },
];

const Header = () => {
  const [openDrawer, setOpenDrawer] = useState(false);

  const handleChangeDrawer = useCallback(() => {
    setOpenDrawer(!openDrawer);
  }, [openDrawer]);

  return (
    <AppBar color="inherit" position="static" sx={{ boxShadow: "none" }}>
      <Toolbar>
        <Hidden mdUp>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            onClick={handleChangeDrawer}
          >
            <MenuIcon />
          </IconButton>
        </Hidden>
        <List
          disablePadding
          sx={{
            display: { md: "flex", xs: "none" },
            alignItems: "center",
            width: "100%",
            maxWidth: 900,
          }}
        >
          {ItemsNavigator.map((text, index) => (
            <Link key={index} to={text.route}>
              <ListItem>
                <ListItemText primary={text.label} />
              </ListItem>
            </Link>
          ))}
        </List>
      </Toolbar>
      <SwipeableDrawer
        anchor="left"
        open={openDrawer}
        onClose={handleChangeDrawer}
        onOpen={handleChangeDrawer}
      >
        <Box
          sx={{ width: 250 }}
          role="presentation"
          onClick={handleChangeDrawer}
          onKeyDown={handleChangeDrawer}
        >
          <List>
            {ItemsNavigator.map((text, index) => (
              <ListItem button key={index}>
                <ListItemText primary={text.label} />
              </ListItem>
            ))}
          </List>
        </Box>
      </SwipeableDrawer>
    </AppBar>
  );
};

export default Header;

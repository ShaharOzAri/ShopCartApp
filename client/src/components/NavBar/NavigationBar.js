import * as React from "react";
import { useEffect, useState } from "react";
import { styled } from "@mui/material/styles";
import Badge from "@mui/material/Badge";
import Box from "@mui/material/Box";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import CssBaseline from "@mui/material/CssBaseline";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import ShoppingCartDrawer from "../ShoppingCart/ShoppingCartDrawer";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../Utils/auth";

const drawerWidth = 400;

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  transition: theme.transitions.create(["margin", "width"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginRight: drawerWidth,
  }),
}));

const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    right: -3,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: "0 4px",
  },
}));

export default function NavigationBar(props) {
  const [openShopping, setOpenShopping] = useState(false);
  const [open, setOpen] = useState(false);
  const auth = useAuth();
  const navigate = useNavigate();

  const handleDrawerOpen = () => {
    setOpenShopping(true);
  };

  const imageClick = () => {
    navigate("/");
  };

  useEffect(() => {
    var canvas = document.getElementById("myCanvas");
    var ctx = canvas.getContext("2d");
    var img = document.getElementById("logo");
    ctx.drawImage(img, 1, 1);
  });

  return (
    <nav>
      <Box sx={{ display: "block", mb: 3, textAlign: "center", height: 90 }}>
        <CssBaseline />
        <AppBar
          position="fixed"
          open={open}
          sx={{
            bgcolor: "#e0d9cc",
            justifyContent: "center",
            height: 80,
            color: "black",
          }}
        >
          <Toolbar>
            <Typography
              variant="h6"
              noWrap
              sx={{ flexGrow: 1 }}
              component="div"
            >
              <canvas
                id="myCanvas"
                onClick={() => imageClick()}
                style={{
                  width: 160,
                  height: "90%",
                  cursor: "pointer",
                  marginTop: 25,
                }}
              ></canvas>
              <img
                id="logo"
                src="https://cdn.onecklace.com/images/logos/autographed_logo.webp"
                style={{
                  width: 160,
                  height: "90%",
                  cursor: "pointer",
                  display: "none",
                }}
                alt="Logo"
                onClick={() => imageClick()}
              />
            </Typography>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="end"
              onClick={handleDrawerOpen}
              sx={{ ...(open && { display: "none" }), mr: 1 }}
            >
              <StyledBadge badgeContent={auth.cartQty}>
                <ShoppingCartIcon sx={{ fontSize: "25px" }} />
              </StyledBadge>
            </IconButton>
          </Toolbar>
        </AppBar>
        <ShoppingCartDrawer
          setOpen={setOpenShopping}
          open={openShopping}
        ></ShoppingCartDrawer>
      </Box>
    </nav>
  );
}

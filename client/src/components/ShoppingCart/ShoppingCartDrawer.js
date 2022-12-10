import * as React from "react";
import { styled } from "@mui/material/styles";
import Drawer from "@mui/material/Drawer";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import ShoppingCartProduct from "./ShoppingCartProduct";
import { Box, Grid } from "@mui/material";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../Utils/auth";

const drawerWidth = 400;

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  textAlign: "center",
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
}));

export default function ShoppingCartDrawer(props) {
  const navigate = useNavigate();
  const auth = useAuth();

  const handleDrawerClose = () => {
    props.setOpen(false);
  };

  const checkOut = () => {
    navigate(`checkout`);
    handleDrawerClose();
  };

  return (
    <asaid>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
          },
        }}
        variant="persistent"
        anchor="right"
        open={props.open}
      >
        <DrawerHeader
          sx={{
            width: "100%",
            bgcolor: "#e3dfd3",
            zIndex: 2,
            position: "sticky",
            top: 0,
            left: 0,
          }}
        >
          <IconButton onClick={handleDrawerClose}>
            <CloseIcon />
          </IconButton>
          <Typography sx={{ textAlign: "center", margin: "auto" }}>
            Shopping Cart
          </Typography>
        </DrawerHeader>
        <Divider />
        {auth.cartItems != null ? (
          auth.cartItems.map((item, index) => {
            return (
              <Box key={index}>
                <ShoppingCartProduct
                  item={item}
                  index={index}
                ></ShoppingCartProduct>
                <Divider />
              </Box>
            );
          })
        ) : (
          <Typography my="15px" mb="400px">
            Cart Is Empty
          </Typography>
        )}
        <Box
          sx={{
            bgcolor: "#e3dfd3",
            position: "sticky",
            bottom: 0,
            left: 0,
            right: 0,
            top: 0,
          }}
        >
          <Divider />
          <Grid container spacing={2} sx={{ mt: 2 }}>
            <Grid item xs={6}>
              <Typography textAlign="left" mx="30px">
                Subtotal
              </Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography textAlign="right" mx="30px">
                ${auth.cartTotal.toFixed(2)}
              </Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography textAlign="left" mx="30px">
                Shipping
              </Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography textAlign="right" mx="30px">
                Free
              </Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography
                fontSize="120%"
                fontWeight="bold"
                textAlign="left"
                mx="30px"
              >
                Total
              </Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography
                fontSize="120%"
                fontWeight="bold"
                textAlign="right"
                mx="30px"
              >
                ${auth.cartTotal.toFixed(2)}
              </Typography>
            </Grid>
          </Grid>

          <Button
            onClick={checkOut}
            fullWidth
            variant="contained"
            sx={{
              my: 3,
              bgcolor: "black",
              width: "90%",
              color: "white",
            }}
          >
            Countinue to CheckOut
          </Button>
        </Box>
      </Drawer>
    </asaid>
  );
}

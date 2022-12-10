import * as React from "react";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { AddNewOrder } from "../../controller/OrderController";
import { useAuth } from "../Utils/auth";
import { useNavigate } from "react-router-dom";

const theme = createTheme();

export default function CheckoutPage(props) {
  const auth = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const order = {
      email: data.get("email"),
      first_name: data.get("firstName"),
      last_name: data.get("lastName"),
      address: data.get("address"),
      products: auth.cartItems,
      totalSum: auth.getCartTotal(),
    };
    var response = await AddNewOrder(order);
    if (response.status == 200) {
      auth.clearCart();
      navigate("/order");
    } else if (response.status == 403) {
      alert("Something went wrong , Please try again!");
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Typography component="h1" variant="h5">
            Checkout
          </Typography>
          <Box
            component="form"
            noValidate
            onSubmit={handleSubmit}
            sx={{ mt: 3 }}
          >
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="given-name"
                  name="firstName"
                  required
                  fullWidth
                  id="firstName"
                  label="First Name"
                  autoFocus
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="lastName"
                  label="Last Name"
                  name="lastName"
                  autoComplete="family-name"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="address"
                  label="address"
                  id="address"
                />
              </Grid>
              <Grid item xs={12}></Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Place an Order
            </Button>
            <Grid
              container
              justifyContent="flex-end"
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                marginBottom: 5,
              }}
            ></Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}

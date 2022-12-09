import * as React from "react";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { AddNewUser } from "../../controller/UserController";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../Utils/auth";

const theme = createTheme();

export default function AddUser() {
  var auth = useAuth();
  const navigate = useNavigate();
  const handleAddUser = async (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const newUser = {
      email: data.get("email"),
      first_name: data.get("firstName"),
      last_name: data.get("lastName"),
      password: data.get("password"),
      role: data.get("role"),
    };
    var response = await AddNewUser(newUser);
    if (response.status == 200) {
      navigate(-1);
    } else if (response.status == 403) {
      alert("email already exist , please try another email");
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
          <Typography component="h1" color="black" variant="contained">
            Add New User
          </Typography>
          <Box
            component="form"
            noValidate
            onSubmit={handleAddUser}
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
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                />
              </Grid>
              <Grid item xs={12}>
                <Select
                  fullWidth
                  id="role"
                  name="role"
                  defaultValue="client"
                  label="Role"
                >
                  <MenuItem value="client">Client</MenuItem>
                  <MenuItem value="admin">Admin</MenuItem>
                </Select>
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2, bgcolor: "black" }}
            >
              Add User
            </Button>
            <Grid
              container
              justifyContent="flex-end"
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                marginBottom: 10,
              }}
            ></Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}

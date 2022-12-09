import React from "react";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { AddNewLocation } from "../../controller/LocationController";

const theme = createTheme();

export default function CreateLocations() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const location = {
      shop_name: data.get("shop_name"),
      latitude: data.get("latitude"),
      longtitude: data.get("longtitude"),
    };
    AddNewLocation(location);
  };

  return (
    <ThemeProvider theme={theme}>
      <Container component='main' maxWidth='xs'>
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Typography component='h1' variant='h5'>
            Create new location{" "}
          </Typography>
          <Box
            component='form'
            noValidate
            onSubmit={handleSubmit}
            sx={{ mt: 3 }}
          >
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id='shop_name'
                  label='Shop Name'
                  name='shop_name'
                  autoComplete='shop_name'
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name='latitude'
                  label='Latitude'
                  type='latitude'
                  id='latitude'
                  autoComplete='new-latitude'
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name='longtitude'
                  label='Longtitude'
                  type='longtitude'
                  id='longtitude'
                  autoComplete='new-longtitude'
                />
              </Grid>
              <Grid item xs={12}></Grid>
            </Grid>
            <Button
              type='submit'
              fullWidth
              variant='contained'
              sx={{ mt: 3, mb: 2 }}
            >
              Add Shop Location
            </Button>
            <Grid
              container
              justifyContent='flex-end'
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

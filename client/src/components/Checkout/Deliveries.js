import { Container, ImageListItem, Typography } from "@mui/material";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import Box from "@mui/material/Box";
import { useState } from "react";
import image from "../images/checkout_image.png";

export default function Deliveries(props) {
  const setCity = props.setCity;
  const setAddress = props.setAddress;
  const setZip = props.setZip;

  const [isValidAddress, setValidAddress] = useState(false);

  return (
    <Container
      sx={{
        height: 450,
        width: "80%",
        backgroundColor: "#fff",
        mt: 3,
        borderRadius: 2,
        boxShadow: 3,
      }}
    >
      <Typography
        sx={{
          display: "flex",
          fontWeight: "bold",
          justifyContent: "center",
          alignContent: "center",
          color: "black",
          fontSize: 25,
        }}
      >
        DELIVERY ADDRESS
      </Typography>

      <Grid container spacing={2} mt={3}>
        <Grid item sx={4}>
          <ImageListItem
            sx={{
              width: 300,
              height: 300,
              boxShadow: 3,
              justifyItems: "left",
              display: "inline-flex",
              flexDirection: "row",
            }}
          >
            <img src={image} sx={{ width: "5" }} />
          </ImageListItem>
        </Grid>
        <Grid item sx={8}>
          <Box
            component="form"
            noValidate
            autoComplete="off"
            mt={4}
            sx={{
              alignContent: "center",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              whiteSpace: "normal",
            }}
          >
            <Grid item xs={8}>
              <Autocomplete
                disablePortal
                id="city"
                name="city"
                options={props.cities}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    label="City"
                    helperText="Check if your address is in the shipping area"
                    sx={{ width: 500 }}
                    fullWidth
                  />
                )}
                onSelect={(event) => {
                  //(event, newCity)
                  // setValidAddress(!isValidAddress);
                  // setCity(newCity.label);

                  if (event.target.value != "") {
                    setValidAddress(true);
                    setCity(event.target.value);
                  } else {
                    setValidAddress(false);
                  }
                }}
              />
            </Grid>
            <Grid item xs={8}>
              {isValidAddress ? (
                <TextField
                  required
                  id="disabledAddress"
                  label="Address"
                  defaultValue="Address"
                  type="text"
                  placeholder="Street & House number"
                  helperText=" "
                  onChange={(event) => {
                    setAddress(event.target.value);
                  }}
                  sx={{ width: 500 }}
                />
              ) : (
                <TextField
                  required
                  disabled
                  error
                  id="address"
                  name="address"
                  label="Address"
                  helperText="Please enter a suitable city"
                  sx={{ width: 500 }}
                />
              )}
            </Grid>
            <Grid item xs={8}>
              {isValidAddress ? (
                <TextField
                  required
                  id="zip"
                  label="Zip / Postcode"
                  type="number"
                  placeholder="Zip number"
                  sx={{ width: 500 }}
                  helperText=" "
                  onChange={(event) => {
                    setZip(event.target.value);
                  }}
                />
              ) : (
                <TextField
                  required
                  disabled
                  error
                  id="outlined-disabled"
                  label="Zip / Postcode"
                  helperText="Please enter a suitable city"
                  sx={{ width: 500 }}
                />
              )}
            </Grid>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
}

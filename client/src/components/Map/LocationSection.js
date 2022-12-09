import * as React from "react";
import Grid from "@mui/material/Grid";
import telaviv from "../images/telaviv.jpg";
import herzliya from "../images/herzliya.jpg";
import rishonlezion from "../images/rishonlezion.jpg";
import LocationCard from "../Map/LocationCard";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

export default function LocationSection(props) {
  var items = [
    {
      src: telaviv,
      alt: "Tel-Aviv",
      Title: "Tel-Aviv",
      city: "TEL AVIV PORT",
      address: "HANGAR 18",
      hours: "08:00-21:30",
    },
    {
      src: herzliya,
      alt: "Herzliya",
      Title: "Herzliya",
      city: "Herzliya",
      address: "9 ARIE SHENKAR ST.",
      hours: "08:00-19:00",
    },
    {
      src: rishonlezion,
      alt: "Rishon LeZion",
      Title: "Rishon LeZion",
      city: "Rishon LeZion",
      address: "5TH YALDEY TEHERAN ST",
      hours: "10:00-21:30",
    },
  ];
  return (
    <Box>
      <Typography
        variant="h3"
        mt={7}
        textAlign="center"
        color="black"
        fontFamily={"monospace"}
        fontWeight="bold"
      >
        Our Stores
      </Typography>
      <Grid
        columns={36}
        sx={{
          flexGrow: 2,
          textAlign: "center",
          marginBottom: 5,
          fontWeight: "bold",
        }}
        container
      >
        {items.map((item, i) => (
          <Grid
            key={i}
            item
            xs={24}
            md={12}
            justifyContent="center"
            sx={{ alignContent: "center", padding: "20px" }}
          >
            <LocationCard sx={{ margin: "auto" }} key={i} item={item} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

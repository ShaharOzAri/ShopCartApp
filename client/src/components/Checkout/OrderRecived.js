import { Container, Typography, Grid, Button } from "@mui/material";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import { useNavigate } from "react-router-dom";

export default function OrderRecived() {
  const navigate = useNavigate();

  return (
    <Container
      mb={3}
      sx={{
        height: "80%",
        width: "80%",
        backgroundColor: "#fff",
        mt: 3,
        borderRadius: 2,
        boxShadow: 3,
        marginBottom: 10,
      }}
    >
      <Grid Container mt={5}>
        <Grid>
          <Typography
            mt={3}
            sx={{
              display: "flex",
              fontWeight: "bold",
              justifyContent: "center",
              alignContent: "center",
              color: "black",
              fontSize: 25,
            }}
          >
            YOUR ORDER RECIEVED
          </Typography>
        </Grid>
      </Grid>

      <Grid
        item
        sx={{
          display: "flex",
          alignContent: "center",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "row",
          paddingTop: 4,
          paddingBottom: 5,
        }}
      >
        <Button
          size="large"
          variant="contained"
          onClick={() => navigate("/")}
          sx={{ color: "white", backgroundColor: "#1F1F1C" }}
          endIcon={<HomeRoundedIcon size="large" />}
        >
          GO TO HOMEPAGE
        </Button>
      </Grid>
    </Container>
  );
}

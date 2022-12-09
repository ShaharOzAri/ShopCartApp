import * as React from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Divider } from "@mui/material";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProductById } from "../../controller/ProductController";
import ProductPageIcons from "./ProductPageIcons";
import { useAuth } from "../Utils/auth";

const theme = createTheme();

export default function ProductPage() {
  let { id } = useParams();
  const [productData, setProductData] = useState(null);
  const auth = useAuth();

  const getProductData = async () => {
    const response = await getProductById(id);
    if (response.status == 200) {
      setProductData(response.data.msg);
    } else {
      alert("something went wrong");
    }
  };

  useEffect(() => {
    getProductData();
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    auth.addCartProduct(productData);
  };

  return productData != null ? (
    <Container maxWidth="xxxl">
      <Grid
        container
        spacing={5}
        columns={12}
        alignItems="center"
        justify="center"
        mt="-110px"
      >
        <Grid
          item
          xs={12}
          md={6}
          alignItems="center"
          justify="center"
          sx={{ mb: 15 }}
        >
          <ImageList sx={{ width: 720, height: 720 }} cols={2} rowHeight={0}>
            {productData.images.map((item, index) => (
              <ImageListItem key={index}>
                <img
                  src={`${item}?w=164&h=164&fit=crop&auto=format`}
                  srcSet={`${item}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                  loading="lazy"
                />
              </ImageListItem>
            ))}
          </ImageList>
        </Grid>
        <Grid item xs={12} md={6} alignItems="center" justify="center">
          <ThemeProvider theme={theme}>
            <CssBaseline />
            <Box
              component="form"
              noValidate
              onSubmit={handleSubmit}
              sx={{
                mb: 45,
                display: "flex",
                flexDirection: "column",
                mt: 5,
              }}
            >
              <Typography
                component="h1"
                variant="h5"
                color={"black"}
                align="center"
              >
                {productData.name}
              </Typography>
              <Typography
                component="h2"
                variant="h6"
                color={"black"}
                fontWeight="bold"
                align="center"
              >
                ${productData.price}
              </Typography>
              <Divider sx={{ my: "20px" }} />
              <Typography
                component="h2"
                color={"black"}
                fontWeight="bold"
                align="center"
              >
                Product Description
              </Typography>
              <Typography component="h3" color={"black"} align="center">
                {productData.description}
              </Typography>

              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{
                  mt: 3,
                  mb: 2,
                  bgcolor: "black",
                  height: "55px",
                  mt: "40px",
                }}
              >
                Add To Cart
              </Button>
              <Divider sx={{ my: "20px" }} />
              <ProductPageIcons></ProductPageIcons>
              <Divider sx={{ my: "20px" }} />
            </Box>
          </ThemeProvider>
        </Grid>
      </Grid>
    </Container>
  ) : (
    ""
  );
}

import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { Stack, Typography } from "@mui/material";
import Divider from "@mui/material/Divider";
import { useState, useEffect } from "react";
import { Container } from "@mui/system";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Slider from "@mui/material/Slider";

export default function FilterCheckBoxes(props) {
  const setProducts = props.setProducts;
  const products = props.products;
  const allProducts = props.allProducts;
  const [productStyle, setProductStyle] = useState([
    "cut out",
    "engraved",
    "zircon",
  ]);
  const [productMaterial, setProductMaterial] = useState([
    "sterling silver",
    "gold plated",
    "rose gold",
  ]);
  const [value, setValue] = useState([0, 100]);

  const handleStyleChange = (e) => {
    if (e.target.checked === true) {
      setProductStyle([...productStyle, e.target.value]);
    } else {
      setProductStyle(productStyle.filter((item) => item != e.target.value));
    }
  };

  const handleMaterialChange = (e) => {
    if (e.target.checked === true) {
      setProductMaterial([...productMaterial, e.target.value]);
    } else {
      setProductMaterial(
        productMaterial.filter((item) => item != e.target.value)
      );
    }
  };

  useEffect(() => {
    setProducts([
      ...allProducts.filter((product) => productStyle.includes(product.type)),
    ]);
  }, [productStyle]);

  useEffect(() => {
    setProducts([
      ...allProducts.filter((product) =>
        productMaterial.includes(product.material)
      ),
    ]);
  }, [productMaterial]);

  useEffect(() => {
    setProducts([
      ...allProducts.filter(
        (product) => product.price > value[0] && product.price < value[1]
      ),
    ]);
  }, [value]);

  function valuetext(value) {
    return value;
  }

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box>
      <Container maxWidth="xl" sx={{ color: "black", bgcolor: "white" }}>
        <Grid container>
          <Grid item xs={2}>
            <Typography
              sx={{
                textAlign: "center",
                fontWeight: "bold",
                mt: 2,
                fontSize: "120%",
              }}
            >
              Style
            </Typography>
            <FormGroup>
              <FormControlLabel
                control={<Checkbox defaultChecked value="cut out" />}
                label="Cut Out"
                onChange={handleStyleChange}
              />
              <FormControlLabel
                control={<Checkbox defaultChecked value="zircon" />}
                label="Zircon"
                onChange={handleStyleChange}
              />
              <FormControlLabel
                control={<Checkbox defaultChecked value="engraved" />}
                label="Engraved"
                onChange={handleStyleChange}
              />
            </FormGroup>
          </Grid>
          <Divider orientation="vertical" flexItem sx={{ mx: 2 }} />
          <Grid item xs={2}>
            <Typography
              sx={{
                textAlign: "center",
                fontWeight: "bold",
                mt: 2,
                fontSize: "120%",
              }}
            >
              Material
            </Typography>
            <FormGroup>
              <FormControlLabel
                control={<Checkbox defaultChecked value="sterling silver" />}
                label="Sterling Silver"
                onChange={handleMaterialChange}
              />
              <FormControlLabel
                control={<Checkbox defaultChecked value="gold plated" />}
                label="Gold Plated"
                onChange={handleMaterialChange}
              />
              <FormControlLabel
                control={<Checkbox defaultChecked value="rose gold" />}
                label="Rose Gold"
                onChange={handleMaterialChange}
              />
            </FormGroup>
          </Grid>
          <Divider orientation="vertical" flexItem sx={{ mx: 2 }} />
          <Grid item xs={2}>
            <Typography
              sx={{
                textAlign: "center",
                fontWeight: "bold",
                mt: 2,
                fontSize: "120%",
              }}
            >
              Price
            </Typography>
            <Box sx={{ width: 300 }}>
              <Stack
                spacing={2}
                direction="row"
                sx={{ mb: 1 }}
                alignItems="center"
              >
                <Typography>{value[0]}</Typography>
                <Slider
                  getAriaLabel={() => "Price range"}
                  value={value}
                  onChange={handleChange}
                  valueLabelDisplay="auto"
                  getAriaValueText={valuetext}
                />
                <Typography>{value[1]}</Typography>
              </Stack>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

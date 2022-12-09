import { useNavigate, useParams } from "react-router-dom";
import { Container, FormControl, Typography } from "@mui/material";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import { useEffect, useState } from "react";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import { AddNewProduct } from "../../controller/ProductController";
import InputLabel from "@mui/material/InputLabel";
import { getAllCategories } from "../../controller/CategoryController";

export default function AddProduct() {
  const [material, setMaterial] = useState("");
  const [type, setType] = useState("");
  const [category, setCategory] = useState("");
  const [counter, setCounter] = useState(0);
  const [categrories, setCategories] = useState("");

  const navigate = useNavigate();

  const getCategoryNames = async () => {
    var res = await getAllCategories();
    if (res.status == 200) {
      res = Array.from(res.data.msg);
      res = res.map((i) => {
        return i.name;
      });
      setCategories(res);
    }
  };

  useEffect(() => {
    getCategoryNames();
  }, []);

  const handleAddProduct = async (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const newProduct = {
      name: data.get("name"),
      price: data.get("price"),
      description: data.get("description"),
      material: material,
      type: type,
      category: category,
      numberOfOrders: 0,
    };
    var images = [];
    for (var i = 0; i < counter; i++) {
      var id = `image${i}`;
      if (data.get(id)) {
        images.push(data.get(id));
      }
      newProduct.images = images;
    }
    var response = await AddNewProduct(newProduct);
    if (response.status == 200) {
      navigate(-1);
    } else if (response.status == 403) {
      alert("Something went wrong,please try again");
    }
  };

  return (
    <Container sx={{ textAlign: "center", maxWidth: 200, bgcolor: "#e0d9cc" }}>
      <Box sx={{ my: 5 }}>
        <Typography sx={{ fontSize: 40, color: "black" }}>
          Add Product
        </Typography>
        <Button
          variant="contained"
          sx={{ m: 2, color: "black" }}
          onClick={() => {
            navigate(-1);
          }}
        >
          Back to All Products
        </Button>

        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Box
            component="form"
            noValidate
            onSubmit={handleAddProduct}
            sx={{ mt: 3 }}
          >
            <Grid container maxWidth="md" spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="name"
                  name="name"
                  fullWidth
                  id="name"
                  label="Product Name"
                  autoFocus
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  type="number"
                  required
                  fullWidth
                  id="price"
                  label="Product Price"
                  name="price"
                  autoComplete="price"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  multiline
                  id="description"
                  label="Product Description"
                  name="description"
                  autoComplete="description"
                />
              </Grid>
              <Grid item xs={12}>
                <Button
                  variant="contained"
                  onClick={() => {
                    setCounter(counter + 1);
                  }}
                  sx={{ color: "black" }}
                >
                  Add Image
                </Button>
                {counter > 0 ? (
                  <Button
                    variant="contained"
                    onClick={() => {
                      setCounter(counter - 1);
                    }}
                    sx={{ color: "black", mx: 2 }}
                  >
                    Delete Image
                  </Button>
                ) : (
                  ""
                )}
                {Array.from(Array(counter)).map((c, index) => {
                  return (
                    <TextField
                      sx={{ my: 1 }}
                      required
                      fullWidth
                      multiline
                      key={"image" + index}
                      id={"image" + index}
                      label={"Product Image" + index}
                      name={"image" + index}
                      autoComplete={"image" + index}
                    />
                  );
                })}
              </Grid>

              <Grid item xs={12}>
                <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-autowidth-label">
                    Material
                  </InputLabel>
                  <Select
                    fullWidth
                    id="material"
                    name="Material"
                    value={material}
                    label="Material"
                    onChange={(event) => {
                      setMaterial(event.target.value);
                    }}
                  >
                    <MenuItem value="sterling silver">Sterling Silver</MenuItem>
                    <MenuItem value="gold plated">Gold Plated</MenuItem>
                  </Select>
                </FormControl>
              </Grid>

              <Grid item xs={12}>
                <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-autowidth-label">
                    Type
                  </InputLabel>
                  <Select
                    fullWidth
                    id="type"
                    name="type"
                    label="Type"
                    value={type}
                    onChange={(event) => {
                      setType(event.target.value);
                    }}
                  >
                    <MenuItem value="cut out">Cut Out</MenuItem>
                    <MenuItem value="zircon">Zircon</MenuItem>
                  </Select>
                </FormControl>
              </Grid>

              <Grid item xs={12}>
                <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-autowidth-label">
                    Category
                  </InputLabel>
                  <Select
                    fullWidth
                    id="category"
                    name="category"
                    label="Category"
                    value={category}
                    onChange={(event) => {
                      setCategory(event.target.value);
                    }}
                  >
                    {categrories != ""
                      ? categrories.map((i, index) => {
                          return (
                            <MenuItem key={index} value={i}>
                              {i}
                            </MenuItem>
                          );
                        })
                      : ""}
                    {/* 
                    <MenuItem value="Bracelete">Bracelete</MenuItem>
                    <MenuItem value="Necklace">Necklace</MenuItem> */}
                  </Select>
                </FormControl>
              </Grid>
            </Grid>

            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2, color: "black" }}
            >
              upload Product
            </Button>
          </Box>
        </Box>
      </Box>
    </Container>
  );
}

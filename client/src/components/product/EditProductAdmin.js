import { useAuth } from "../Utils/auth";
import { useNavigate, useParams } from "react-router-dom";
import { Container, Typography } from "@mui/material";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import { useEffect, useState } from "react";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import {
  deleteProduct,
  getProductById,
  updateProduct,
} from "../../controller/ProductController";

export default function EditProductAdmin() {
  const { productId } = useParams();

  const [product, serProduct] = useState(null);

  const getProduct = async (id) => {
    var recivedProduct = await getProductById(id);
    if (recivedProduct.status == 200) {
      serProduct(recivedProduct.data.msg);
    }
  };

  useEffect(() => {
    getProduct(productId);
  }, []);

  var updatedProduct = product;
  const navigate = useNavigate();

  const handleAllProducts = () => {
    navigate(-1);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const response = await updateProduct(updatedProduct);
    if (response.status == 200) {
      navigate("/admin/products");
    } else {
      alert("something went wrong");
    }
  };

  const handleDelete = async (event) => {
    event.preventDefault();
    const response = await deleteProduct(updatedProduct._id);
    if (response.status == 200) {
      navigate("/admin/products");
    } else {
      alert("something went wrong");
    }
  };
  return (
    <Container sx={{ textAlign: "center", maxWidth: 200, bgcolor: "#e0d9cc" }}>
      {product != null ? (
        <Box sx={{ my: 5 }}>
          <Typography sx={{ fontSize: 40, color: "black" }}>
            {product.name} Details
          </Typography>
          <Button
            variant="contained"
            sx={{ m: 2, color: "black" }}
            onClick={handleAllProducts}
          >
            Back to All Products
          </Button>
          <Button
            variant="contained"
            sx={{ m: 2, color: "black" }}
            onClick={handleDelete}
          >
            Delete Product
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
              onSubmit={handleSubmit}
              sx={{ mt: 3 }}
            >
              <Grid container maxWidth="md" spacing={2}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    autoComplete="name"
                    defaultValue={product.name}
                    name="name"
                    fullWidth
                    id="name"
                    label="Product Name"
                    autoFocus
                    onChange={(event) =>
                      (updatedProduct["name"] = event.target.value)
                    }
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    type="number"
                    required
                    fullWidth
                    defaultValue={product.price}
                    id="price"
                    label="Product Price"
                    name="price"
                    autoComplete="price"
                    onChange={(event) =>
                      (updatedProduct["price"] = event.target.value)
                    }
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    multiline
                    defaultValue={product.description}
                    id="description"
                    label="Product Description"
                    name="description"
                    autoComplete="description"
                    onChange={(event) =>
                      (updatedProduct["description"] = event.target.value)
                    }
                  />
                </Grid>
                <Grid item xs={12}>
                  {product.images != null
                    ? product.images.map((image, index) => {
                        return (
                          <TextField
                            sx={{ my: 1 }}
                            required
                            fullWidth
                            defaultValue={product.images[index]}
                            key={"image" + index}
                            id={"image" + index}
                            label={"Product Image" + index}
                            name={"image" + index}
                            onChange={(event) => {
                              updatedProduct["images"][index] =
                                event.target.value;
                            }}
                          />
                        );
                      })
                    : ""}
                </Grid>

                <Grid item xs={12}>
                  <Select
                    fullWidth
                    id="material"
                    name="Material"
                    defaultValue={product.material}
                    label="material"
                    onChange={(event) => {
                      updatedProduct["material"] = event.target.value;
                    }}
                  >
                    <MenuItem value="sterling silver">Sterling Silver</MenuItem>
                    <MenuItem value="gold plated">Gold Plated</MenuItem>
                  </Select>
                </Grid>

                <Grid item xs={12}>
                  <Select
                    fullWidth
                    id="type"
                    name="type"
                    defaultValue={product.type}
                    label="Type"
                    onChange={(event) => {
                      updatedProduct["type"] = event.target.value;
                    }}
                  >
                    <MenuItem value="cut out">Cut Out</MenuItem>
                    <MenuItem value="zircon">Zircon</MenuItem>
                  </Select>
                </Grid>

                <Grid item xs={12}>
                  <Select
                    fullWidth
                    id="category"
                    name="category"
                    defaultValue={product.category}
                    label="Category"
                    onChange={(event) => {
                      updatedProduct["category"] = event.target.value;
                    }}
                  >
                    <MenuItem value="Bracelete">Bracelete</MenuItem>
                    <MenuItem value="Necklace">Necklace</MenuItem>
                  </Select>
                </Grid>
              </Grid>

              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2, color: "black" }}
              >
                Update Product Details
              </Button>
            </Box>
          </Box>
        </Box>
      ) : (
        ""
      )}
    </Container>
  );
}

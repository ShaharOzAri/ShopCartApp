import * as React from "react";
import { getAllProducts } from "../../controller/ProductController";
import { useState, useEffect } from "react";
import ProductCard from "./ProductCard";
import { Container } from "@mui/system";
import { Grid } from "@mui/material";

export default function ShopPage(props) {
  const [products, setProducts] = useState(null);

  const getProducts = async () => {
    const res = await getAllProducts();
    if (res.status == 200) {
      setProducts(res.data.msg);
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div>
      <Container maxWidth="xl">
        {products != null ? (
          <Grid
            container
            spacing={1}
            direction="row"
            alignItems="center"
            justifyContent="center"
          >
            {products.map((product, index) => {
              return (
                <Grid item xs={3} key={index}>
                  <ProductCard
                    product={product}
                    setCartItems={props.setCartItems}
                  />
                </Grid>
              );
            })}
          </Grid>
        ) : (
          ""
        )}
      </Container>
    </div>
  );
}

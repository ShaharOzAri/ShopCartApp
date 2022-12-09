import * as React from "react";
import TitleDivider from "../UI/TitleDivider";
import { Grid } from "@mui/material";
import ProductCard from "../product/ProductCard";
import { useState, useEffect } from "react";
import { getAllProducts } from "../../controller/ProductController";

export default function BestSeller() {
  const [products, setProducts] = useState([]);

  const getAll = async () => {
    const response = await getAllProducts();
    if (response.status == 200) {
      setProducts(response.data.msg);
    } else {
      alert("something went wrong");
    }
  };

  useEffect(() => {
    getAll();
  }, []);

  return (
    <section>
      <TitleDivider Title="BEST SELLERS"></TitleDivider>
      <Grid
        container
        spacing={1}
        direction="row"
        alignItems="center"
        justifyContent="center"
        sx={{ mb: 5 }}
      >
        {products
          .sort((a, b) => b.numberOfOrders - a.numberOfOrders)
          .slice(0, 4)
          .map((product, index) => {
            return (
              <Grid item xs={3} key={index}>
                <ProductCard product={product} />
              </Grid>
            );
          })}
      </Grid>
    </section>
  );
}

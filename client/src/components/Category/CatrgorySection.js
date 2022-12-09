import * as React from "react";
import Grid from "@mui/material/Grid";
import CategoryCard from "./CategoryCard";

export default function CategorySection() {
  var items = [
    {
      src: "https://cdn.onecklace.com/products/2605/product_2605_model_3_730.jpeg",
      alt: "Necklace",
      Title: "NECKLACES",
    },
    {
      src: "https://cdn.onecklace.com/products/1411/product_1411_model_1_730.jpeg",
      alt: "Bracelete",
      Title: "BRACELETES",
    },
  ];
  return (
    <section>
      <Grid
        columns={24}
        sx={{
          flexGrow: 2,
          textAlign: "center",
          marginBottom: 5,
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
            <CategoryCard sx={{ margin: "auto" }} key={i} item={item} />
          </Grid>
        ))}
      </Grid>
    </section>
  );
}

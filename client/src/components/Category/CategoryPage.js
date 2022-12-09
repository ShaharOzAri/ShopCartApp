import * as React from "react";
import { useParams } from "react-router-dom";
import { getProductsByCategory } from "../../controller/ProductController";
import { getCategoryByName } from "../../controller/CategoryController";
import { useState, useEffect } from "react";
import ProductCard from "../product/ProductCard";
import TitleDivider from "../UI/TitleDivider";
import { Container } from "@mui/system";
import { Grid } from "@mui/material";
import FilterSection from "./FilterSection";
import Search from "./Search";

export default function CategoryPage() {
  let { category } = useParams();

  const [products, setProducts] = useState(null);
  const [allProducts, setAllProducts] = useState(null);
  const [filterTab, setFilterTab] = useState(false);
  const [categoryDes, setCategoryDes] = useState(null);

  const getProducts = async () => {
    const res = await getProductsByCategory(category);
    if (res.status == 200) {
      setProducts(res.data.msg);
      setAllProducts(res.data.msg);
      setFilterTab(false);
    }
  };
  const getCategories = async () => {
    const response = await getCategoryByName(category);
    if (response.status == 200) {
      setCategoryDes(response.data.msg[0]);
    } else {
      alert("something went wrong");
    }
  };

  useEffect(() => {
    getCategories();
  }, [category]);

  useEffect(() => {
    setProducts(null);
    getProducts();
  }, []);

  useEffect(() => {
    getProducts();
  }, [category]);

  return (
    <div>
      <TitleDivider Title={category}></TitleDivider>
      <Container
        sx={{
          color: "black",
          textAlign: "center",
          my: "15px",
        }}
      >
        {categoryDes != null ? categoryDes.description : ""}
      </Container>
      <Container maxWidth="xl">
        <FilterSection
          products={products}
          setProducts={setProducts}
          allProducts={allProducts}
          filterTab={filterTab}
          setFilterTab={setFilterTab}
        ></FilterSection>
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
                  <ProductCard product={product} />
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

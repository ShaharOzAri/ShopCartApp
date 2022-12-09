import { background } from "@chakra-ui/react";
import React from "react";
import { useState, useEffect } from "react";
import { getAllProducts } from "../../controller/ProductController";
import BarChart from "./BarChart";
import { getProductsNameGroupBy } from "../../controller/ProductController";
import { getProductsMaterialGroupBy } from "../../controller/ProductController";
import { Box } from "@mui/system";
import PieChart from "./PieChart";
import { Grid } from "@mui/material";

function Statics() {
  const [productsGroup, setProductsproductsGroup] = useState([]);

  const getAllGroup = async () => {
    const response = await getProductsNameGroupBy();
    if (response.status == 200) {
      setProductsproductsGroup(response.data.msg);
    } else {
      alert("something went wrong");
    }
  };

  useEffect(() => {
    getAllGroup();
  }, []);

  const [materialGroup, setMaterialGroup] = useState([]);

  const getOrdersGroup = async () => {
    const response = await getProductsMaterialGroupBy();
    if (response.status == 200) {
      setMaterialGroup(response.data.msg);
    } else {
      alert("something went wrong");
    }
  };

  useEffect(() => {
    getOrdersGroup();
  }, []);

  const data = {
    labels: productsGroup.map((data) => data._id),
    datasets: [
      {
        label: "Quantity",
        data: productsGroup.map((data) => data.count),
        backgroundColor: [
          "rgba(75,192,192,1)",
          "#ecf0f1",
          "#50AF95",
          "#f3ba2f",
          "#2a71d0",
        ],
        borderColor: "black",
        borderWidth: 2,
      },
    ],
  };

  const material = {
    labels: materialGroup.map((data) => data._id),
    datasets: [
      {
        label: "Mat",
        data: materialGroup.map((data) => data.count),
        backgroundColor: [
          "rgba(75,192,192,1)",
          "#ecf0f1",
          "#50AF95",
          "#f3ba2f",
          "#2a71d0",
        ],
        borderColor: "black",
        borderWidth: 2,
      },
    ],
  };

  return (
    <Grid
      container
      spacing={1}
      direction="row"
      alignItems="center"
      justifyContent="center"
    >
      <div style={{ width: 700 }}>
        <BarChart chartData={data} />
      </div>
      <div style={{ width: 500 }}>
        <PieChart chartData={material} />
      </div>
    </Grid>
  );
}

export default Statics;

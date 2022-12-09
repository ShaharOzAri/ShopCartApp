import React from "react";
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";
import { Box } from "@mui/material";

function BarChart({ chartData }) {
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Product Type By Quantity",
      },
    },
  };

  return <Bar data={chartData} options={options} />;
}

export default BarChart;

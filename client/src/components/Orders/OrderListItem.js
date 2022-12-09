import * as React from "react";
import { DataGrid, gridColumnsSelector } from "@mui/x-data-grid";
import { Container } from "@mui/material";
import { createSearchParams, useNavigate } from "react-router-dom";
import { getOrdersByDate } from "../../controller/OrderController";
import { useState, useEffect } from "react";
import { SuccessSnackbar } from "../Utils/Snackbar";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";
import TextField from "@mui/material/TextField";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";

const columns = [
  { field: "id", headerName: "ID", width: 90 },
  {
    field: "date",
    headerName: "Date",
    width: 150,
    editable: false,
  },
  {
    field: "userEmail",
    headerName: "Email",
    width: 150,
    editable: true,
  },
  {
    field: "productIds",
    headerName: "Product Ids",
    width: 200,
    editable: true,
  },
  {
    field: "address",
    headerName: "Adrress",
    width: 150,
    editable: true,
  },
  {
    field: "totalSum",
    headerName: "Total Sum",
    width: 100,
    editable: true,
  },
];

export default function DataGridDemo() {
  const [orders, setOrders] = useState(null);
  let newDate = new Date();
  const [date, setDate] = useState(newDate.toISOString().split("T")[0]);

  const handleChange = (pickedDate) => {
    setDate(pickedDate.toISOString().split("T")[0]);
  };

  const getAll = async () => {
    var recivedUsers = await getOrdersByDate(date);
    if (recivedUsers.status == 200) {
      var data = recivedUsers.data.msg;
      for (var i = 0; i < data.length; i++) {
        data[i].id = i + 1;
        data[i].date = data[i].date.split("T")[0];
        for (var j = 0; j < data[i].productIds.length; j++) {
          data[i].productIds[j] = data[i].productIds[j].name;
        }
      }
      setOrders(data);
    }
  };

  useEffect(() => {
    getAll();
  }, []);

  useEffect(() => {
    getAll();
  }, [date]);

  const navigate = useNavigate();
  return (
    <Box>
      <Container style={{ width: "60%", textAlign: "center", marginBottom: 4 }}>
        <LocalizationProvider dateAdapter={AdapterDateFns}>
          <DesktopDatePicker
            label="Date"
            inputFormat="dd/MM/yyyy"
            value={date}
            onChange={handleChange}
            renderInput={(params) => <TextField {...params} />}
          />
        </LocalizationProvider>
      </Container>
      <Container style={{ height: 400, width: "60%" }}>
        <DataGrid
          sx={{
            backgroundColor: "#e0d9cc",
            borderColor: "black",
          }}
          onRowClick={(params, event) => {
            event.preventDefault();
            navigate(`/admin/order/${params.row._id}`);
          }}
          rows={orders != null ? orders : []}
          columns={columns}
          pageSize={5}
          rowsPerPageOptions={[5]}
          // checkboxSelection
          disableSelectionOnClick
        />
      </Container>
    </Box>
  );
}

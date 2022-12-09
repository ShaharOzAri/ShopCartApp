import { useAuth } from "../Utils/auth";
import { useNavigate, useParams } from "react-router-dom";
import { Container, Typography } from "@mui/material";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import { useEffect, useState } from "react";
import {
  deleteOrder,
  getOrderById,
  updateOrder,
} from "../../controller/OrderController";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";

export default function OrderDetails() {
  const { orderId } = useParams();
  const [order, setOrder] = useState(null);
  const [date, setDate] = useState(null);
  const [productIds, setProductIds] = useState(new Array());

  const getOrder = async (id) => {
    var recivedUser = await getOrderById(id);
    if (recivedUser.status == 200) {
      var res = recivedUser.data.msg;
      var tmp = new Array();
      res.productIds.forEach((element) => {
        tmp.push(element.name);
      });
      setProductIds(tmp);
      setOrder(res);
      setDate(res.date);
    }
  };

  useEffect(() => {
    getOrder(orderId);
  }, []);

  var updatedOrder = order;
  const navigate = useNavigate();
  const handleAllOrders = () => {
    navigate(-1);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const response = await updateOrder(updatedOrder);
    if (response.status == 200) {
      navigate("/admin/orders");
    } else {
      alert("something went wrong");
    }
  };

  const handleDelete = async (event) => {
    event.preventDefault();
    const response = await deleteOrder(updatedOrder._id);
    if (response.status == 200) {
      alert("delete");
      navigate("/admin/orders");
    } else {
      alert("something went wrong");
    }
  };

  const handleChange = (pickedDate) => {
    setDate(pickedDate.toISOString().split("T")[0]);
  };

  useEffect(() => {
    if (updatedOrder != null) {
      updatedOrder["date"] = "date";
    }
  }, [date]);

  return (
    <Container sx={{ textAlign: "center", maxWidth: 200, bgcolor: "#e0d9cc" }}>
      {order != null ? (
        <Box sx={{ my: 5 }}>
          <Typography sx={{ fontSize: 40, color: "black" }}>
            {order._id} Order Details
          </Typography>
          <Button
            variant="contained"
            sx={{ m: 2, color: "black" }}
            onClick={handleAllOrders}
          >
            Back to All Orders
          </Button>

          <Button
            variant="contained"
            sx={{ m: 2, color: "black" }}
            onClick={handleDelete}
          >
            Delete Order
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
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    autoComplete="given-name"
                    defaultValue={order.userEmail}
                    name="userEmail"
                    fullWidth
                    id="userEmail"
                    label="User"
                    autoFocus
                    onChange={(event) =>
                      (updatedOrder["userEmail"] = event.target.value)
                    }
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  {date != null ? (
                    <LocalizationProvider dateAdapter={AdapterDateFns}>
                      <DesktopDatePicker
                        label="Date"
                        inputFormat="dd/MM/yyyy"
                        value={date}
                        onChange={handleChange}
                        renderInput={(params) => <TextField {...params} />}
                      />
                    </LocalizationProvider>
                  ) : (
                    ""
                  )}
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    defaultValue={productIds}
                    id="productIds"
                    label="product Ids"
                    name="productIds"
                    onChange={(event) =>
                      (updatedOrder["productIds"] = event.target.value)
                    }
                  />
                </Grid>
                <Grid item xs={12}></Grid>
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  defaultValue={order.address}
                  id="address"
                  label="Address"
                  name="address"
                  onChange={(event) =>
                    (updatedOrder["address"] = event.target.value)
                  }
                />
              </Grid>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2, color: "black" }}
              >
                Update User Details
              </Button>
              <Grid
                container
                justifyContent="flex-end"
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  marginBottom: 5,
                }}
              ></Grid>
            </Box>
          </Box>
        </Box>
      ) : (
        ""
      )}
    </Container>
  );
}

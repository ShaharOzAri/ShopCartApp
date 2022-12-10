import * as React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import AddIcon from "@mui/icons-material/Add";
import Typography from "@mui/material/Typography";
import RemoveIcon from "@mui/icons-material/Remove";
import CloseIcon from "@mui/icons-material/Close";
import { useAuth } from "../Utils/auth";

export default function ShoppingCartProduct(props) {
  const product = props.item;
  const auth = useAuth();

  const handleIncrement = () => {
    auth.changeQty(product, product.qty + 1);
  };

  const handleDecrement = () => {
    auth.changeQty(product, product.qty - 1);
  };

  const handleDelete = () => {
    auth.removeCartProduct(product._id);
  };

  return (
    <Box sx={{ flexGrow: 1, my: 2, mx: 4 }}>
      <Grid container spacing={1}>
        <Grid item xs={5}>
          <Box
            component="img"
            sx={{
              height: 150,
              width: 150,
            }}
            src={product.images[0]}
          />
        </Grid>
        <Grid item xs={6}>
          <Typography>{product.name}</Typography>
          <Typography sx={{ fontWeight: "bold" }}>
            ${(product.price * product.qty).toFixed(2)}
          </Typography>
          <ButtonGroup
            size="small"
            sx={{ my: 4 }}
            aria-label="small outlined button group"
          >
            <Button onClick={handleIncrement} sx={{ color: "black" }}>
              <AddIcon></AddIcon>
            </Button>
            <Button sx={{ color: "black" }}>{product.qty}</Button>
            <Button onClick={handleDecrement} sx={{ color: "black" }}>
              <RemoveIcon></RemoveIcon>
            </Button>
          </ButtonGroup>
        </Grid>
        <Grid item xs={1} sx={{ mt: -2, ml: -2 }}>
          <Button onClick={handleDelete} sx={{ color: "black" }}>
            <CloseIcon></CloseIcon>
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
}

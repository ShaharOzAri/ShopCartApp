import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useAuth } from "../Utils/auth";

const ProductCard = (props) => {
  const product = props.product;
  const cartItems = props.cartItems;
  const auth = useAuth();

  const handleClick = () => {
    auth.addCartProduct(product);
  };

  return product != null ? (
    <Card sx={{ maxWidth: 370, mx: 5 }}>
      <CardMedia
        component="img"
        height="300"
        image={product.images[0]}
        alt="Classic Name Necklace"
      />
      <CardContent>
        <Typography
          gutterBottom
          variant="h7"
          component="div"
          textAlign="center"
        >
          {product.name}
        </Typography>
        <Typography
          variant="body2"
          color="black"
          textAlign="center"
          fontSize="20px"
        >
          ${product.price}
        </Typography>
      </CardContent>
      <CardActions sx={{ justifyContent: "center" }}>
        <Button
          variant="outlined"
          size="small"
          color="secondary"
          sx={{ color: "black" }}
          onClick={handleClick}
        >
          Add to Cart
        </Button>
      </CardActions>
    </Card>
  ) : (
    ""
  );
};

export default ProductCard;

import TitleDivider from "../components/UI/TitleDivider";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Grid";
import ProductList from "../components/product/ProductList";
import Deliveries from "../components/Checkout/Deliveries";
import { Button } from "@mui/material";
import { useAuth } from "../components/Utils/auth";
import { useNavigate } from "react-router-dom";
import { AddNewOrder } from "../controller/OrderController";
import { useState } from "react";

export default function CheckoutPage(props) {
  const auth = useAuth();

  const [city, setCity] = useState(null);
  const [address, setAddress] = useState(null);
  const [zip, setZip] = useState(null);

  const navigate = useNavigate();

  const createOrderProductsArr = () => {
    const orderArr = new Array();
    if(auth.cartItems!=null){
      auth.cartItems.forEach((p) => {
        orderArr.push({
          id: p._id,
          name: p.name,
          qty: p.qty,
        });
      });
    }else{
      alert("Your cart is empty. Please add some products");

    }
    return orderArr;
  };

  const createAddress = () => {
    if (city != null && address != null && zip != null) {
      return `${city} , ${address} , ${zip}`;
    } else {
      alert("please enter address");
      return false;
    }
  };

  const placeOrderHandler = async (event) => {
    event.preventDefault();
    const finalAddress = createAddress();
    const finalProductArray= createOrderProductsArr();
    if (finalAddress && finalProductArray) {
      const currentDate = new Date();
      const userJson = JSON.parse(auth.getUser());
      const newOrder = {
        date: currentDate,
        productIds: finalProductArray,
        totalSum: auth.getCartTotal(),
        userEmail: userJson.email,
        address: finalAddress,
      };
      var response = await AddNewOrder(newOrder);
      if (response.status == 200) {
        auth.clearCart();
        navigate(`order/${response.data.msg._id}`);
      } else if (response.status == 403) {
        alert("Something went wrong,please try again");
      }
    }
  };

  return (
    <Container
      maxWidth="xxl"
      sx={{ alignContent: "center", alignItems: "center", display: "inline" }}
    >
      <TitleDivider Title="CHECKOUT" />
      <ProductList mt={3} mb={3} productList={props.productList} />
      <br />
      <TitleDivider Title="" mt={3} />
      <Deliveries
        cities={cities}
        setCity={setCity}
        setAddress={setAddress}
        setZip={setZip}
      />
      <Grid
        mt={3}
        sx={{
          display: "flex",
          alignContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <Button
          variant="contained"
          size="large"
          onClick={placeOrderHandler}
          sx={{
            backgroundColor: "#dbc49dd2",
            alignItems: "center",
            width: 400,
          }}
        >
          Place order
        </Button>
      </Grid>
    </Container>
  );
}

const cities = 
[{ label: "Tzfat" },
 { label: "Tel-Aviv" },
 { label: "Acre" },
{ label: "Karmiel" }, 
{ label: "Rishon LeZion" }, 
{ label: "Tiberias" }, 
{ label: "Modi'in-Maccabim-Re'ut" },
{ label: "Kiryat Shmona" },
{ label: "Holon" },
{ label: "Hadera" },
{ label: "Ashdod" },
{ label: "Afula" },
{ label: "Ashkelon" },
{ label: "Bat Yam" },
{ label: "Beersheba" },
{ label: "Dimona" },
{ label: "Herzliya" },
{ label: "Jerusalem" },
{ label: "Ramla" },
{ label: "Rehovot" },
{ label: "Yavne" },
{ label: "Eilat" },
];
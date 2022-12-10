// import CheckoutPage from "./pages/CheckoutPage";
import * as React from "react";
import "./App.css";
import { Route, BrowserRouter, Routes } from "react-router-dom";
// import HomePage from "./components/HomePage/HomePageContent";
import { createTheme, ThemeProvider, styled } from "@mui/material/styles";
// import CategoryPage from "./components/Category/CategoryPage";
// import { AuthProvider } from "./components/Utils/auth";
// import ProductPage from "./components/product/ProductPage";
// import OrderPage from "./pages/OrderPage";
import ShopPage from "./components/HomePage/ShopPage";


const customTheme = createTheme({
  palette: {
    primary: {
      main: "#eaece5",
      contrastText: "black",
    },
  },
});

const MyThemeComponent = styled("div")(({ theme }) => ({
  color: theme.palette.primary.contrastText,
  backgroundColor: theme.palette.primary.main,
  padding: theme.spacing(1),
  borderRadius: theme.shape.borderRadius,
}));

function App() {
  return (
    //<AuthProvider>
      <ThemeProvider theme={customTheme}>
        <MyThemeComponent>
          <BrowserRouter>
            <Routes>
              <Route exact path="/" element={<ShopPage />} />
              {/* <Route path="/category/:category" element={<CategoryPage />} />
              <Route path="/product/:id" element={<ProductPage />} />
              <Route path="/checkout" element={<CheckoutPage />} />
              <Route path="/orders" element={<OrderPage />} />
              <Route path="/checkout" element={<CheckoutPage />} />
              <Route path="/checkout/order/:orderId" element={<OrderPage />} />         */}
            </Routes>
          </BrowserRouter>
        </MyThemeComponent>
      </ThemeProvider>
    //</AuthProvider>
  );
}

export default App;

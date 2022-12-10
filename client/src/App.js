import CheckoutPage from "./components/Checkout/CheckoutPage";
import * as React from "react";
import "./App.css";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import { createTheme, ThemeProvider, styled } from "@mui/material/styles";
import { AuthProvider } from "./components/Utils/auth";
import NavigationBar from "./components/NavBar/NavigationBar";
import ShopPage from "./components/HomePage/ShopPage";
import OrderRecived from "./components/Checkout/OrderRecived";

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
    <AuthProvider>
      <ThemeProvider theme={customTheme}>
        <MyThemeComponent>
          <BrowserRouter>
            <NavigationBar></NavigationBar>
            <Routes>
              <Route exact path="/" element={<ShopPage />} />
              <Route path="/checkout" element={<CheckoutPage />} />
              <Route path="/order" element={<OrderRecived />} />
            </Routes>
          </BrowserRouter>
        </MyThemeComponent>
      </ThemeProvider>
    </AuthProvider>
  );
}

export default App;

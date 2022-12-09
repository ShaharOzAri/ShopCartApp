import CheckoutPage from "./pages/CheckoutPage";
import * as React from "react";
import "./app.css";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import HomePage from "./components/HomePage/HomePageContent";
import { createTheme, ThemeProvider, styled } from "@mui/material/styles";
import NavigationBar from "./components/NavBar/NavigationBar";
import AboutUsPage from "./pages/AboutUsPage";
import Chat from "./components/Chat/Chat";
import CreateLocations from "./components/Map/CreateLocations";
import CategoryPage from "./components/Category/CategoryPage";
import { AuthProvider } from "./components/Utils/auth";
import { UserDetails } from "./components/User/UserDetails";
import { RequireAuth } from "./components/Utils/RequireAuth";
import UserDetailsAdmin from "./components/User/UserDetailsAdmin";
import UserListItem from "./components/User/UserListItem";
import ProductSection from "./components/product/ProductSection";
import ProductPage from "./components/product/ProductPage";
import EditProductAdmin from "./components/product/EditProductAdmin";
import AddUser from "./components/User/AddUser";
import Footer from "./components/HomePage/Footer";
import AddProduct from "./components/product/AddProduct";
import Statics from "./components/Statics/Statics";
import OrderPage from "./pages/OrderPage";
import OrderListItem from "./components/Orders/OrderListItem";
import OrderDetails from "./components/Orders/OrderDetails";
import ChatsList from "./components/Chat/ChatsList";

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
              <Route exact path="/" element={<HomePage />} />
              <Route path="/aboutus" element={<AboutUsPage />} />
              <Route path="/chat" element={<Chat />} />
              <Route path="/createLocation" element={<CreateLocations />} />
              <Route path="/category/:category" element={<CategoryPage />} />
              <Route path="/product/:id" element={<ProductPage />} />
              <Route path="/statics" element={<Statics />} />
              <Route path="/checkout" element={<CheckoutPage />} />
              <Route path="/orders" element={<OrderPage />} />
              <Route path="/checkout" element={<CheckoutPage />} />
              <Route path="/checkout/order/:orderId" element={<OrderPage />} />
              {/* <Route path="/user" element={<UserDetails />} /> */}
              <Route path="/user/" element={<UserDetails />} />
              <Route
                exact
                path="/admin"
                element={
                  <RequireAuth>
                    <Statics />
                  </RequireAuth>
                }
              />
              <Route
                exact
                path="/admin/chats"
                element={
                  <RequireAuth>
                    <ChatsList />
                  </RequireAuth>
                }
              />
              <Route
                exact
                path="/admin/chat/:id"
                element={
                  <RequireAuth>
                    <Chat />
                  </RequireAuth>
                }
              />
              <Route
                path="/admin/userDetails"
                element={
                  <RequireAuth>
                    <UserDetails />
                  </RequireAuth>
                }
              />
              <Route
                path="/admin/users"
                element={
                  <RequireAuth>
                    <UserListItem />
                  </RequireAuth>
                }
              />
              <Route
                path="/admin/user/:userId"
                element={
                  <RequireAuth>
                    <UserDetailsAdmin />
                  </RequireAuth>
                }
              />
              <Route
                path="admin/products"
                element={
                  <RequireAuth>
                    <ProductSection />
                  </RequireAuth>
                }
              />
              <Route
                path="admin/product/:productId"
                element={
                  <RequireAuth>
                    <EditProductAdmin />
                  </RequireAuth>
                }
              />
              <Route
                path="admin/orders"
                element={
                  <RequireAuth>
                    <OrderListItem />
                  </RequireAuth>
                }
              />
              <Route
                path="admin/order/:orderId"
                element={
                  <RequireAuth>
                    <OrderDetails />
                  </RequireAuth>
                }
              />
              <Route
                path="admin/addUser"
                element={
                  <RequireAuth>
                    <AddUser />
                  </RequireAuth>
                }
              />
              <Route
                path="admin/addProduct"
                element={
                  <RequireAuth>
                    <AddProduct />
                  </RequireAuth>
                }
              />
            </Routes>
            <Footer></Footer>
          </BrowserRouter>
        </MyThemeComponent>
      </ThemeProvider>
    </AuthProvider>
  );
}

export default App;

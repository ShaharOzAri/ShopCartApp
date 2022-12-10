import { createContext, useContext, useState, useEffect } from "react";

const Authcontext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [cartItems, SetCartItems] = useState(
    JSON.parse(sessionStorage.getItem("cartItems"))
  );

  const calcCartQty = () => {
    var counter = 0;
    if (cartItems === null) {
      return 0;
    }
    cartItems.map((x) => (counter += x.qty));
    return counter;
  };

  const calcProductQty = (id) => {
    const counter = cartItems.reduce(
      (total, product) => total + (product._id === id),
      0
    );
    return counter;
  };

  const calcCartTotal = () => {
    var total = 0;
    if (cartItems === null) {
      return 0;
    }
    cartItems.map((x) => (total += x.qty * x.price));
    return total;
  };

  const [cartQty, setCartQty] = useState(calcCartQty());
  const [cartTotal, setCartTotal] = useState(calcCartTotal());

  const getCartTotal = () => {
    return cartTotal;
  };

  const getCartItems = () => {
    return cartItems;
  };
  //cart management
  useEffect(() => {
    if (cartItems == null || cartItems.length == 0) {
      sessionStorage.setItem("cartItems", null);
      SetCartItems(null);
    }
    sessionStorage.setItem("cartItems", JSON.stringify(cartItems));
    setCartQty(calcCartQty());
    setCartTotal(calcCartTotal());
  }, [cartItems]);

  const addCartProduct = (product) => {
    if (cartItems == null) {
      SetCartItems([{ ...product, qty: 1 }]);
      return;
    }
    const exist = cartItems.find((x) => x._id === product._id);
    if (exist) {
      SetCartItems(
        cartItems.map((x) =>
          x._id === product._id ? { ...exist, qty: exist.qty + 1 } : x
        )
      );
    } else {
      SetCartItems([...cartItems, { ...product, qty: 1 }]);
    }
  };

  const removeCartProduct = (id) => {
    SetCartItems(cartItems.filter((x) => x._id !== id));
  };

  const clearCart = () => {
    setCartQty(0);
    setCartTotal(0);
    SetCartItems(null);
  };

  const changeQty = (product, quantity) => {
    var exist = cartItems.find((x) => x._id === product._id);
    if (quantity === 0) {
      SetCartItems(cartItems.filter((x) => x._id !== product._id));
    } else {
      exist.qty = quantity;
      SetCartItems(cartItems.map((x) => (x.id === product._id ? exist : x)));
    }
  };

  return (
    <Authcontext.Provider
      value={{
        cartItems,
        cartQty,
        cartTotal,
        getCartTotal,
        calcProductQty,
        calcCartQty,
        addCartProduct,
        removeCartProduct,
        changeQty,
        clearCart,
      }}
    >
      {children}
    </Authcontext.Provider>
  );
};

export const useAuth = () => {
  return useContext(Authcontext);
};

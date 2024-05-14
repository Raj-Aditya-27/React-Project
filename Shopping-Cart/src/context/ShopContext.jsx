import React, { createContext, useState } from "react";
import { products } from "../components/Page/Home/Home";

export const ShopContext = createContext(null);

const getDefaulCart = () => {
  let cart = {};
  for (let i = 1; i <= products.length; i++) {
    cart[i] = 0;
  }
  return cart;
};

function ShopContextProvider(props) {
  const [cartItems, setCartItems] = useState(getDefaulCart);
  const addToCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
  };
  const removeFromCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
  };

  const contextValue = { cartItems, addToCart, removeFromCart };


  console.log(cartItems)

  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
}

export default ShopContextProvider;

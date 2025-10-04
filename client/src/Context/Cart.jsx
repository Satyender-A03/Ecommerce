import { createContext } from "react";

export const CartContext = createContext({
  cart: [],
  setCart: () => {},
  incQty: () => {},
  decQty: () => {},
});

export const CartProvider = CartContext.Provider;

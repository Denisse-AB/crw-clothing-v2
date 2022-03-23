import { createContext, useState } from "react";

export const CartContext = createContext({
  isHidden: false,
  setHidden: () => {}
});

export const CartProvider = ({ children }) => {
  const [isHidden, setHidden] = useState(false)
  const value = { isHidden, setHidden };
  return (
    <CartContext.Provider value={value}>{children}</CartContext.Provider>
  )
}

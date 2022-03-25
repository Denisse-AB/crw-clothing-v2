import { createContext, useState } from "react";

const addCartItem = (cartItems, productToAdd) => {
  // find product
  const existingCartItem = cartItems.find((cartItem) =>
    cartItem.id === productToAdd.id
  )
  // If product, increae qty
  if (existingCartItem) {
    return cartItems.map((cartItem) =>
      cartItem.id === productToAdd.id
      ? {...cartItem, quantity: cartItem.quantity + 1}
      : cartItem
    )
  }
  // return new array of cart items
  return [...cartItems, {...productToAdd, quantity: 1}]
}

export const CartContext = createContext({
  isHidden: false,
  setHidden: () => {},
  cartItems: [],
  addItemToCart: () => {}
});

export const CartProvider = ({ children }) => {
  const [isHidden, setHidden] = useState(false)
  const [cartItems, setCartItems] = useState([])

  const addItemToCart = (productToAdd) => {
    // console.log(productToAdd)
    setCartItems(addCartItem(cartItems, productToAdd))
  }

  const value = { isHidden, setHidden, cartItems, addItemToCart };
  return (
    <CartContext.Provider value={value}>{children}</CartContext.Provider>
  )
}

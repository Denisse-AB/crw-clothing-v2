import { createContext, useEffect, useState } from "react";

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
  addItemToCart: () => {},
  itemsCount: 0
});

export const CartProvider = ({ children }) => {
  const [isHidden, setHidden] = useState(false)
  const [cartItems, setCartItems] = useState([])
  const [itemsCount, setItemsCount] = useState(0)

  const addItemToCart = (productToAdd) => {
    // console.log(productToAdd)
    setCartItems(addCartItem(cartItems, productToAdd))
  }

  // Imperative function that can return a cleanup function (mutation)
  useEffect(() => {
     const newItemsCount = cartItems.reduce((total, cartItem) =>
      total + cartItem.quantity, 0)
      setItemsCount(newItemsCount)
  }, [cartItems])

  const value = { isHidden, setHidden, cartItems, addItemToCart, itemsCount };
  return (
    <CartContext.Provider value={value}>{children}</CartContext.Provider>
  )
}

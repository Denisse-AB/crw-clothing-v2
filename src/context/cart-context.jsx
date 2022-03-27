import { createContext, useEffect, useState } from "react";

// Helpers
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

const removeCartItem = (cartItems, productToRemove) => {
  // Find
  const existingCartItem = cartItems.find(cartItem =>
    cartItem.id === productToRemove.id
  )
  // Check if exists
  if (existingCartItem.quantity === 1) {
    return cartItems.filter(cartItem => cartItem.id !== productToRemove.id)
  }
  // Return new array
  return cartItems.map(
    cartItem => cartItem.id === productToRemove.id
    ? {...cartItem, quantity: cartItem.quantity - 1}
    : cartItem)
}

const clearCartItem = (cartItems, productToClear) => {
  return cartItems.filter(cartItem => cartItem.id !== productToClear.id)
}

export const CartContext = createContext({
  isHidden: false,
  setHidden: () => {},
  cartItems: [],
  addItemToCart: () => {},
  itemsCount: 0,
  removeItem: () => {},
  clearItemFromCart: () => {},
  cartTotal: 0
});

export const CartProvider = ({ children }) => {
  const [isHidden, setHidden] = useState(false)
  const [cartItems, setCartItems] = useState([])
  const [itemsCount, setItemsCount] = useState(0)
  const [cartTotal, setCartTotal] = useState(0)

  const addItemToCart = (productToAdd) => {
    // console.log(productToAdd)
    setCartItems(addCartItem(cartItems, productToAdd))
  }

  const decreaseQty = (productToRemove) => {
    setCartItems(removeCartItem(cartItems, productToRemove))
  }

  const clearItemFromCart = (productToClear) => {
    setCartItems(clearCartItem(cartItems, productToClear))
  }
  // Imperative function that can return a cleanup function (mutation)
  useEffect(() => {
     const newItemsCount = cartItems.reduce((total, cartItem) =>
      total + cartItem.quantity, 0)
      setItemsCount(newItemsCount)
  }, [cartItems])

  useEffect(() => {
    const newCartTotal = cartItems.reduce((total, cartItem) =>
      total + cartItem.quantity * cartItem.price, 0)
      setCartTotal(newCartTotal)
  }, [cartItems])

  const value = {
    isHidden,
    setHidden,
    cartItems,
    addItemToCart,
    itemsCount,
    decreaseQty,
    clearItemFromCart,
    cartTotal
  };
  return (
    <CartContext.Provider value={value}>{children}</CartContext.Provider>
  )
}

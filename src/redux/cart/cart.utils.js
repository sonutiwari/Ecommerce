export const addItemToCart = (cartItems, itemToAdd) => {
  if (cartItems.find((cartItem) => cartItem.id === itemToAdd.id)) {
    return cartItems.map((cartItem) =>
      cartItem.id === itemToAdd.id
        ? {
            ...cartItem,
            quantity: cartItem.quantity + 1,
          }
        : cartItem
    );
  }
  return [...cartItems, { ...itemToAdd, quantity: 1 }];
};

export const removeItemFromCart = (cartItems, itemToRemove) =>
  cartItems.filter((item) => item.id !== itemToRemove.id);

export const decreaseItemQuantity = (cartItems, item) => {
  const newCartItems = [];
  for (const cartItem of cartItems) {
    if (cartItem.id === item.id) {
      newCartItems.push({
        ...cartItem,
        quantity: cartItem.quantity - 1,
      });
    } else {
      newCartItems.push({ ...cartItem });
    }
  }
  return newCartItems;
};

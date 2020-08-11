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

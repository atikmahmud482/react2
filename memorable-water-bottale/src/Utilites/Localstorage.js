const getStoredCart = () => {
  const storedCartString = localStorage.getItem("cart");
  if (storedCartString) {
    return JSON.parse(storedCartString);
  }
  return [];
};

const saveCartToList = (cart) => {
  const cartStringified = JSON.stringify(cart);
  localStorage.setItem("cart", cartStringified);
};

const addToList = (id) => {
  const cart = getStoredCart();
  cart.push(id);
  saveCartToList(cart);
};

const removeFromList = (id) => {
  const cart = getStoredCart();
  const remaining = cart.filter((idx) => idx !== id);
  saveCartToList(remaining);
};

export { addToList, getStoredCart, removeFromList };

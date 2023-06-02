/**
 * the middle ware to update the session storage
 */
const sessionStorageMiddleware = (store) => (next) => (action) => {
    const result = next(action);
    const cart = store.getState().cart.cart;
    sessionStorage.setItem("cart", JSON.stringify(cart));
    return result;
  };
  
  export default sessionStorageMiddleware;
  
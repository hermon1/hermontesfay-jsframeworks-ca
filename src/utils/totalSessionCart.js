/**
 *
 * @param {array} cart the cart with all products
 * @returns either 0 or the amount of products in the cart
 */
const totalSessionCart = (cart) => {
    if (cart === null) {
      return 0;
    }
    const numberOfItems = cart.reduce((amount, product) => {
      return (amount = amount + product.amount);
    }, 0);
    return numberOfItems;
  };
  
  export default totalSessionCart;
  
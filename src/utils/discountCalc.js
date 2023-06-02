//simple calculation to get discount amount, between 1 - 100
const discountCalc = (oldPrice, newPrice) => {
    let difference = oldPrice - newPrice;
    let decimal = difference / oldPrice;
    let discount = decimal * 100;
    return discount.toFixed();
  };
  
  export default discountCalc;
  
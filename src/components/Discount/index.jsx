import React from 'react'
import discountCalc from '../../utils/discountCalc';
import { DiscountOverlay } from './index.styles';
/**
 * 
 * @param {object} props new and original price
 * @description calculates discount inside an overlay 
 * @returns the overlay with discount
 */
const Discount = ({originalPrice, newPrice}) => {
    let discount = discountCalc(originalPrice, newPrice);
  return (
    <DiscountOverlay><p>{discount}%</p></DiscountOverlay>
  )
}

export default Discount
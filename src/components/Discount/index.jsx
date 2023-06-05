import React from 'react'
import discountCalc from '../../utils/discountCalc';
import { DiscountOverlay } from './index.styles';

const Discount = ({originalPrice, newPrice}) => {
    let discount = discountCalc(originalPrice, newPrice);
  return (
    <DiscountOverlay><p>{discount}%</p></DiscountOverlay>
  )
}

export default Discount
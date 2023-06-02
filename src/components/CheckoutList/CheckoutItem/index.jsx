import React from 'react'
import { Item } from './index.styles'
/**
 * 
 * @param {object} props the name and amount of that item
 * @description returns a component with info about the purchased item
 * @returns single checkout item
 */
const CheckoutItem = ({name, amount}) => {
  return (
    <Item>
        <p>{name}</p>
        <p>{amount}</p>
    </Item>
  )
}

export default CheckoutItem
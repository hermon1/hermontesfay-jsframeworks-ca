import React from 'react'
import { Item } from './index.styles'

const CheckoutItem = ({name, amount}) => {
  return (
    <Item>
        <p>{name}</p>
        <p>{amount}</p>
    </Item>
  )
}

export default CheckoutItem
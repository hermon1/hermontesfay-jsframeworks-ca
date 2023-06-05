import React from 'react'
import CheckoutItem from './CheckoutItem'
import { Reciept, OuterList } from './index.styles'

const CheckoutList = ({purchasedItems}) => {
  return (
    <OuterList>
    <h2>Items purchased:</h2>
    <Reciept>
        {purchasedItems.map(item =>{
            return <CheckoutItem key={item.id} name={item.title} amount={item.amount}/>
        })}
    </Reciept>
    </OuterList>
  )
}

export default CheckoutList
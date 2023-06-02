import React from 'react'
import CheckoutItem from './CheckoutItem'
import { Reciept, OuterList } from './index.styles'
/**
 * 
 * @param {object} props list of items purchased
 * @description returns every item purchased in a list, with the amount of each item
 * @returns a full list of the items purchased
 */
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
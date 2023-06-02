import React, { useEffect } from 'react'
import { Item, Label, Info, Remove } from './index.styles'
import ClearIcon from '@mui/icons-material/Clear';
import { useDispatch } from 'react-redux';
import { removeProduct } from '../../../store/cartSlice/cartSlice';
import { useState } from 'react';
import SelectOptions from '../../SelectOptions';
/**
 * 
 * @param {object} props the needed variables for an cart item, title, amount, price and id 
 * @description an cart item
 * @returns an cart item with info about the item, as well as buttons to add or remove that item
 */
const CartItem = ({title, amount, price, id}) => {
    const [newAmount, setNewAmount] = useState(amount)
    const dispatch = useDispatch();

    //to update the mui component
    const updateAmount = (e)=>{
        setNewAmount(e.target.value)
    }
    //since state can be slow, we use useEffect to update the amount so it does not give wrong values
    useEffect(()=>{
        dispatch(removeProduct({id,all:false,amount:newAmount}))
    },[newAmount, id, dispatch])
    //price = price * amount or single price?
  return (
    <Item>
        <Label className="title">Product Name</Label>
        <Label className="amount">Amount</Label>
        <Label className="price">Price</Label>
        <Info className="productTitle">{title}</Info>
        <SelectOptions newAmount={amount}  updateAmount={updateAmount} />
        <Info className="productPrice">{(price * amount).toFixed(2)}</Info>
        <Remove aria-label='Remove product' onClick={()=>{dispatch(removeProduct({id, all:true}))}} className='remove'><ClearIcon fontSize='large'/></Remove>
    </Item>
  )
}

export default CartItem
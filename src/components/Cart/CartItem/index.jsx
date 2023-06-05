import React, { useEffect } from 'react'
import { Item, Label, Info, Remove } from './index.styles'
import ClearIcon from '@mui/icons-material/Clear';
import { useDispatch } from 'react-redux';
import { removeProduct } from '../../../store/cartSlice/cartSlice';
import { useState } from 'react';
import SelectOptions from '../../SelectOptions';

const CartItem = ({title, amount, price, id}) => {
    const [newAmount, setNewAmount] = useState(amount)
    const dispatch = useDispatch();

   
    const updateAmount = (e)=>{
        setNewAmount(e.target.value)
    }
    
    useEffect(()=>{
        dispatch(removeProduct({id,all:false,amount:newAmount}))
    },[newAmount, id, dispatch])
   
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
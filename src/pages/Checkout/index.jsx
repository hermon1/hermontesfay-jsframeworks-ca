import React from 'react'
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { SuccessMessage, CheckoutMessage, CheckoutMain } from './index.styles';
import { Link, useNavigate } from 'react-router-dom';
import CheckoutList from '../../components/CheckoutList';
import { useSelector, useDispatch } from 'react-redux';
import { removeAllProducts } from '../../store/cartSlice/cartSlice';
import { useState, useEffect } from 'react';
import Button from '../../components/Button';

const Checkout = () => {
  const navigate = useNavigate();
  const cart = useSelector((state=>state.cart.cart))
  const [checkoutItems] = useState(cart)
  const dispatch = useDispatch();
  
  useEffect(()=>{
    (()=>{dispatch(removeAllProducts())})();  
  },[dispatch])
  
  if(checkoutItems.length === 0){
    navigate("/")
  }
  return (
    <CheckoutMain>
      <SuccessMessage>
      <h1>Purchase completed</h1>
      <CheckCircleIcon fontSize='large' color='success'/>
      </SuccessMessage>
      <CheckoutMessage>
        <p>Thank you for your purchase! We will shortly begin packing your order.</p>
        <p>If you have any questions regarding your order, please contact us via our <Link to="/contact">contact form</Link></p>
        <p>Have a great day!</p>
      </CheckoutMessage>
      <CheckoutList purchasedItems={checkoutItems}/>
      <Link className='botBtn' to="/"><Button text="Home"/></Link>
    </CheckoutMain>
  )
}

export default Checkout
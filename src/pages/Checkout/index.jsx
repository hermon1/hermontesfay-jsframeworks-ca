import React from 'react'
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { SuccessMessage, CheckoutMessage, CheckoutMain } from './index.styles';
import { Link, useNavigate } from 'react-router-dom';
import CheckoutList from '../../components/CheckoutList';
import { useSelector, useDispatch } from 'react-redux';
import { removeAllProducts } from '../../store/cartSlice/cartSlice';
import { useState, useEffect } from 'react';
import Button from '../../components/Button';
/**
 * @description removes the redux state, adds a temprary state with a "reciept", shows a success message, and a back button
 * @returns The chekcout page
 */
const Checkout = () => {
  const navigate = useNavigate();
  const cart = useSelector((state=>state.cart.cart))
  const [checkoutItems] = useState(cart)
  const dispatch = useDispatch();
  //removes all products from the cart, but they are still in the state here to display the purchased items.
  useEffect(()=>{
    (()=>{dispatch(removeAllProducts())})();  
  },[dispatch])
  //goes to home page if someone tries to acces checkout without anything in cart
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
        <p>Thank you for  purchasing from us! We will shortly begin packing your order.</p>
        <p>If you have any questions regarding your order, please contact us via our <Link to="/contact">contact form</Link></p>
        <p>Hope you have a wonderfull day!</p>
      </CheckoutMessage>
      <CheckoutList purchasedItems={checkoutItems}/>
      <Link className='botBtn' to="/"><Button text="Home"/></Link>
    </CheckoutMain>
  )
}

export default Checkout
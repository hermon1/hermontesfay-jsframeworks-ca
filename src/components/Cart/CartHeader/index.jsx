import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import React from 'react'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { CartHeaderInner, CartOverlay } from './index.styles';

const CartHeader = () => {
  const total = useSelector(state=>state.cart.total);
  return (
    <CartHeaderInner>
    <Link to="/cart" aria-label='icon / link to cart'>
    {total > 0 ? <CartOverlay>{total}</CartOverlay> : null}
    <ShoppingCartIcon fontSize='large' color='info'  />
    </Link>
    </CartHeaderInner>
  )
}

export default CartHeader
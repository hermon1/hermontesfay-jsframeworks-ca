import React from 'react'
//import { useContext } from 'react'
//import { ProductContext } from '../../context/Products'
import { CartMain, CartItems, Total, LowerCart, InnerCart } from './index.styles'
import { useSelector, useDispatch } from 'react-redux'
import CartItem from '../../components/Cart/CartItem';
import { removeAllProducts } from '../../store/cartSlice/cartSlice'
import Button from '../../components/Button';
import Back from '../../components/Button/Back';
import { Link } from 'react-router-dom';

const Cart = () => {
  const dispatch = useDispatch()
  const cart = useSelector(state=>state.cart.cart);
  return (
    <CartMain>
      <InnerCart>
        <h1>Cart</h1>
        <CartItems>
          {cart.length > 0 ?
          cart.map(product =>{
            return <CartItem id={product.id} key={product.id} title={product.title} amount={product.amount} price={product.discountedPrice}/>
          }) :
          <p className='empty'>No items in cart</p>}
      </CartItems>

      {cart.length > 0 ? 
        <LowerCart>
        <Button extraClass="removeAll" text="Remove all" onClickFunction={()=>dispatch(removeAllProducts())} />
        <Total>Total:{cart.reduce((total, product)=>{
          return total + product.amount * product.discountedPrice
          },0).toFixed(2)}
        </Total>
        <Link className='checkout' to="/checkout">
          <Button text="Checkout" />
        </Link>
      </LowerCart> :
      null}
      </InnerCart>
      <Back/>
    </CartMain>
  )
}

export default Cart


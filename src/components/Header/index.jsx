import React from 'react'
import { InnerHeader, Logo } from './index.styles'
import Nav from '../Nav'
import CartHeader from '../Cart/CartHeader'
import { Link } from 'react-router-dom'
/**
 * 
 * @returns the global header navigation, logo and cart icon
 */
const Header = () => {
  return (
    <InnerHeader>
        <Nav/>
        <Logo><Link className='defaultLink' to="/">Shop'n go</Link></Logo>
        <CartHeader/>
    </InnerHeader>
  )
}

export default Header
import React from 'react'
import { InnerHeader, Logo } from './index.styles'
import Nav from '../Nav'
import CartHeader from '../Cart/CartHeader'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <InnerHeader>
        <Nav/>
        <Logo><Link className='defaultLink' to="/">Quick Shop</Link></Logo>
        <CartHeader/>
    </InnerHeader>
  )
}

export default Header
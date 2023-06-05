import React from 'react'
import Footer from '../Footer'
import Header from '../Header'
import Modal from '../Modal'
import SearchBar from '../SearchBar'

const Layout = ({children}) => {
  return (
    <>
    <Header/>
    <Modal/>
    <SearchBar/>
    {children}
    <Footer/>
    </>
  )
}

export default Layout
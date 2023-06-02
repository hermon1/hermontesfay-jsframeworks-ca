import React from 'react'
import Footer from '../Footer'
import Header from '../Header'
import Modal from '../Modal'
import SearchBar from '../SearchBar'
/**
 * 
 * @param {object} props the props.children, used to add the content inside the layout
 * @returns the full layout of the page
 */
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
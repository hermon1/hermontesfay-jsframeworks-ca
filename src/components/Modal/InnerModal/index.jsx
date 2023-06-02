import React from 'react'
import { useContext } from 'react'
import { NavModalContext } from '../../../context/NavModal'
import Navigation from '../../Nav/Navigation'
import { InnerModalBig, InnerModalSmall, ModalButton } from './index.styles'
import ClearIcon from "@mui/icons-material/Clear"
import { forwardRef } from 'react'
/**
 * @description this creates an modal with diffrent size based on the screen width, that it gets from the NavModalContext
 * @returns the modal
 */
const InnerModal =forwardRef((props,ref) => {
    const {width, setModalStatus} = useContext(NavModalContext);
  return (
    (width < 500)
    ? 
  <InnerModalSmall ref={ref} tabIndex={0}>
        <ModalButton aria-label='Exit menu button' onClick={()=>{setModalStatus(false)}}><ClearIcon fontSize="large" color='info'/></ModalButton>
        <Navigation modal={true}/>
  </InnerModalSmall>
    :
    <InnerModalBig ref={ref} tabIndex={0}>
        <ModalButton aria-label='Exit menu button' onClick={()=>{setModalStatus(false)}}><ClearIcon  fontSize='large' color='info'/></ModalButton>
        <Navigation modal={true}/>
    </InnerModalBig>
  )
})

export default InnerModal
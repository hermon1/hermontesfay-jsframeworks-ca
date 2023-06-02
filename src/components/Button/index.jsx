import React from 'react'
import { Button as DefaultButton } from './index.styles'
/**
 * 
 * @param {object} props the props of the Button
 * @description based on the input, returns a button with text, a function and extra styling
 * @returns A custom Button
 */
const Button = ({text, onClickFunction, extraClass, type}) => {
  return (
    <DefaultButton className={"button " + extraClass ? extraClass : null} onClick={onClickFunction ? (e)=>{onClickFunction()}: null} type={type ? type : null}>{text}</DefaultButton>
  )
}

export default Button
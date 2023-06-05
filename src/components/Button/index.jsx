import React from 'react'
import { Button as DefaultButton } from './index.styles'

const Button = ({text, onClickFunction, extraClass, type}) => {
  return (
    <DefaultButton className={"button " + extraClass ? extraClass : null} onClick={onClickFunction ? (e)=>{onClickFunction()}: null} type={type ? type : null}>{text}</DefaultButton>
  )
}

export default Button
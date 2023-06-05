import React from 'react'
import { Error } from './index.styles'

const ErrorResponse = ({message}) => {
  return (
    <Error>{message ? message : null}</Error>
  )
}

export default ErrorResponse
import React from 'react'
import { Error } from './index.styles'
/**
 * 
 * @param {object} props the error message 
 * @returns the error message inside an styled component
 */
const ErrorResponse = ({message}) => {
  return (
    <Error>{message ? message : null}</Error>
  )
}

export default ErrorResponse
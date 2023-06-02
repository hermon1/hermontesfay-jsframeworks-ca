import React from 'react'
import ErrorResponse from '../ErrorResponse'
import { Input, TextArea, InnerInput } from './index.styles'
/**
 * 
 * @param {object} props all needed info about the input field
 * @description creates an component with label, and input or text area. it also adds error styling if needed.
 * @returns input field component
 */
const InputField = ({placeholder, id, hookData, hookFunction, inputType, errors}) => {
  return (
    <InnerInput id={id}>
        <label htmlFor={id}>{placeholder}</label>
        {inputType === "input" ? <Input className={errors[hookData]?.message ? "error" :  null} {...hookFunction(hookData)} placeholder={placeholder} name={id}/> : <TextArea className={errors[hookData]?.message ? "error" :  null} {...hookFunction(hookData)} placeholder={placeholder} name={id}/>}
        <ErrorResponse message={errors[hookData]?.message}/>
    </InnerInput>
  )
}


export default InputField

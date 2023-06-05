import React from 'react'
import { InnerError } from './index.styles'

const Error = () => {
  return (
    <InnerError>
        <h1>Sorry, we ran into a problem</h1>
        <p>Please wait a few minutes and try again</p>
    </InnerError>
  )
}

export default Error
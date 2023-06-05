import React from 'react'
import { Link } from 'react-router-dom'
import Button from '../../components/Button'
import { UnknownPage } from './index.styles'

const NotFound = () => {
  return (
    <UnknownPage>
      <h1>Could not find page</h1>
      <Link to="/"><Button text="Home" /></Link>
      </UnknownPage>
  )
}

export default NotFound
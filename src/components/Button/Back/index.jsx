import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Button } from '../index.styles'

const Back = () => {
    const navigate = useNavigate()
  return (
    <Button className='back' onClick={()=>{navigate(-1)}}>Back</Button>
  )
}

export default Back


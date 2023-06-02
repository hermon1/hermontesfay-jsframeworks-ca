import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Button } from '../index.styles'
/**
 *  @description a back button that navigates one back in the routing history
 * @returns back button
 */
const Back = () => {
    const navigate = useNavigate()
  return (
    <Button className='back' onClick={()=>{navigate(-1)}}>Back</Button>
  )
}

export default Back


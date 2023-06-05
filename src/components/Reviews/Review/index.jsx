import React from 'react'
import RatingSection from '../../Rating'
import { InnerReview, Name, Description} from './index.styles'

const Review = ({data}) => {
  return (
    <InnerReview>
    <RatingSection rating={data.rating}/>
    <Name>{data.username}</Name>
    <Description>{data.description}</Description>
    </InnerReview>
  )
}

export default Review
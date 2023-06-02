import React from 'react'
import RatingSection from '../../Rating'
import { InnerReview, Name, Description} from './index.styles'
/**
 * 
 * @param {object} props all the review data 
 * @returns username, review and rating in form of stars
 */
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
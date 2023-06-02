import React from 'react'
import { InnerRating, SecondaryColorRating } from './index.styles'
/**
 * 
 * @param {object} props the rating number and amount of reviews
 * @returns a component with stars, based on the rating, as well as an total review count
 */
const RatingSection = ({rating, numberOfReviews}) => {
  return (
    <InnerRating className='rating'>
        <SecondaryColorRating color='secondary'  name='productRating' readOnly defaultValue={rating} precision={0.1}/>
        {numberOfReviews? <p>({numberOfReviews})</p> : null}
    </InnerRating>
  )
}

export default RatingSection
import React from 'react'
import { InnerRating, SecondaryColorRating } from './index.styles'

const RatingSection = ({rating, numberOfReviews}) => {
  return (
    <InnerRating className='rating'>
        <SecondaryColorRating color='secondary'  name='productRating' readOnly defaultValue={rating} precision={0.1}/>
        {numberOfReviews? <p>({numberOfReviews})</p> : null}
    </InnerRating>
  )
}

export default RatingSection
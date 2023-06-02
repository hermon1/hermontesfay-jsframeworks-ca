import RatingSection from "../Rating"
import { OverallReview, ReviewSection,AllReviews } from "./index.styles"
import Review from "./Review"
/**
 * 
 * @param {object} props the reviews and rating of the product
 * @returns all reviews and overal rating
 */
const Reviews = ({reviews, rating}) => {
  return (
    <ReviewSection>
    <h2>Reviews</h2>
    <OverallReview>
    <p>Overall:</p> 
    <RatingSection rating={rating} numberOfReviews={reviews.length}/>
    </OverallReview>
    <AllReviews>
      {(reviews.length > 0) ? reviews.map(review =>{
        return <Review key={review.id} data={review}/>
      }) : <p>No one has reviewed the product yet</p>}
    </AllReviews>
    </ReviewSection>
      )
}

export default Reviews
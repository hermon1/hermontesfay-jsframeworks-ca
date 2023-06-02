import { Skeleton } from "@mui/material"
import { ReviewSection, OverallReview, AllReviews } from "../../Reviews/index.styles"
import RatingSection from "../../Rating"
/**
 * 
 * @returns the review section, but with placeholders/skeleton for loading state
 */
const ReviewsLoader = () => {
    return (
        <ReviewSection>
        <Skeleton><h2>Reviews</h2></Skeleton>
        <Skeleton>
        <OverallReview>
        <Skeleton><p>Overall:</p></Skeleton>
        <Skeleton><RatingSection rating={0} numberOfReviews={0}/></Skeleton>
        </OverallReview>
        </Skeleton>
        <Skeleton><AllReviews>
        <p>No one has reviewed the product yet</p>
        </AllReviews>
        </Skeleton>
        </ReviewSection>
          )
}

export default ReviewsLoader

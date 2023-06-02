import styled from "styled-components";

const OverallReview = styled.div`
  display: flex;
  flex-direction: row;
  p {
    font-size: 20px;
    margin: 5px 0;
  }
  @media screen and (max-width: 1024px) {
        width: 100%;
    margin-bottom: 20px;
  }
`;
const ReviewSection = styled.div`
  height: 80%;
  width: 80%;
  margin: 0 0 auto 0;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  @media screen and (max-width: 1024px) {
    grid-column: 1/2;

    width: 100%;
    height: 100%;
    margin-bottom: 20px;
    min-height: 300px;
    h2 {
      text-align: center;
    }
  }
  @media screen and (max-width: 460px) {
    margin-bottom: 20px;
  }
`;

const AllReviews = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  @media screen and (max-width: 1024px) {
    flex-direction: row;
    flex-wrap: wrap;
  }
`;
export { OverallReview, ReviewSection, AllReviews };

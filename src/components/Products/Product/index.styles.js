import styled from "styled-components";

const ProductCard = styled.div`
  box-shadow: 0px 2px 5px 2px rgba(128, 128, 128, 0.5);
  border-radius: 10px;
  width: 100%;
  box-sizing: border-box;
  height: 330px;
  p {
    margin: 0px;
  }
  h2 {
    margin: 0px;
  }
`;
const LowerCard = styled.div`
  height: 40%;
  display: flex;
  flex-wrap: wrap;
  padding: 10px;
  box-sizing: border-box;
  align-items: center;
  .productCardButton {
    width: auto;
    margin: 0 0 0 auto;
    box-sizing: border-box;
    text-align: center;
  }
  .title {
    width: 100%;
    height: 50px;
  }
  .rating {
    width: 100%;
  }
  .price {
    width: auto;
  }
`;
const ProductCardImage = styled.img`
  border-radius: 10px 10px 0px 0px;
  height: 100%;
  object-fit: cover;
  width: 100%;
`;
const ImageSection = styled.div`
  border-radius: 10px 10px 0px 0px;
  height: 60%;
  width: 100%;
  position: relative;
`;
export { ProductCard, ProductCardImage, ImageSection, LowerCard };

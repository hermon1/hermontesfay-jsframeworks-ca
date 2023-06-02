import styled from "styled-components";
import { ImageSection } from "../Product/index.styles";
import { ProductCardImage } from "../Product/index.styles";
const SingleProductContent = styled.div`
  width: 100%;
  height: 400px;
  margin: 0 0 auto 0;
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  box-shadow: 0px 2px 5px 2px rgba(128, 128, 128, 0.5);
  border-radius: 10px;
  @media screen and (max-width: 1024px) {
    flex-direction: row;

    grid-column: 1/2;
  }
  @media screen and (max-width: 460px) {
    min-height: 400px;
    height: 100%;
    max-height: 500px;
    flex-direction: column;
  }
`;
const ProductInfo = styled.div`
  width: 100%;
  height: 40%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  padding: 10px;
  box-sizing: border-box;
  grid-template-areas:
    "title title"
    "desc desc"
    "price button";
  @media screen and (max-width: 1024px) {
    height: 100%;
    grid-template-rows: auto auto 1fr;
    .addToCart {
      margin: auto 0 10px auto;
    }
  }
  @media screen and (max-width: 460px) {
    height: 100%;
    .addToCart {
      width: 70%;
    }
  }
`;
const Title = styled.h1`
  grid-area: title;
  margin: 0;
`;
const Desc = styled.p`
  grid-area: desc;
  margin: 0 0 auto 0;
  font-size: 20px;
`;
const Price = styled.p`
  grid-area: price;
  margin: 0 auto 0 0;
  @media screen and (max-width: 1024px) {
    margin: auto 0 10px 0;
  }
`;

const SinglePageImageSection = styled(ImageSection)`
  height: 60%;

  @media screen and (max-width: 1024px) {
    height: 100%;
    border-radius: 10px 0 0 10px;
  }
  @media screen and (max-width: 460px) {
    border-radius: 10px 10px 0 0;
    height: 60%;
  }
`;
const SinglePageImage = styled(ProductCardImage)`
  @media screen and (max-width: 1024px) {
    border-radius: 10px 0 0 10px;
  }
  @media screen and (max-width: 460px) {
    border-radius: 10px 10px 0 0;
    max-height: 250px;
  }
`;
export {
  SingleProductContent,
  ProductInfo,
  Title,
  Desc,
  Price,
  SinglePageImageSection,
  SinglePageImage,
};

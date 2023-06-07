import styled from "styled-components";
import { Main } from "../../theme/theme";
const CartMain = styled(Main)`
  width: 33%;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  h1 {
    text-align: center;
  }
  .empty {
    text-align: center;
  }
  
  @media (max-width: 1024px) {
    width: 75%;
  }
  @media (max-width: 745px) {
    width: 90%;
  }
  @media (max-width: 585px) {
    width: 100%;
  }
`;
const CartItems = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-bottom: 10px;
`;
const Total = styled.p`
  display: flex;
  margin: 0 0 0 auto;
  font-size: 25px;
  font-weight: bold;
`;
const LowerCart = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 10px 0px;

  @media (max-width: 585px) {
    grid-template-columns: 1fr 2fr;
  }
  .checkout {
    grid-column: 2 / 3;
    margin: 0 0 0 auto;
  }
  .removeAll {
    width: 50%;
    @media (max-width: 585px) {
      width: 100%;
    }
  }
`;

const InnerCart = styled.div``;
export { CartMain, CartItems, Total, LowerCart, InnerCart };

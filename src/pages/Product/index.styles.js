import styled from "styled-components";
import { Main } from "../../theme/theme";

const SingleProductMain = styled(Main)`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr auto;
  width: 66%;
  margin: 10px auto;
  gap: 0px 8%;
  box-sizing: border-box;
  align-items: center;
  .back {
    grid-column: 1 / 3;
    height: 40px;
  }
 
  @media screen and (max-width: 1250px) {
    grid-template-rows: auto auto auto;
    width: 80%;
    .back{
    
  }
  }
  @media screen and (max-width: 1024px) {
    width: 100%;
    grid-template-columns: 1fr;
    gap: 0;
  }
`;

export { SingleProductMain };

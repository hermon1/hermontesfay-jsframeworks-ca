import styled from "styled-components";
import { Main } from "../../theme/theme";

const Home = styled(Main)`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  width: 75%;
  justify-content: center;
  box-sizing: border-box;
  gap: 20px;
  @media screen and (max-width: 1250px) {
    grid-template-columns: 1fr 1fr 1fr;
  }
  @media screen and (max-width: 1024px) {
    max-width: 100%;
    width: 100%;
  }
  @media screen and (max-width: 850px) {
    grid-template-columns: 1fr 1fr;
  }
  @media screen and (max-width: 460px) {
    grid-template-columns: 1fr;
    width: 80%;
  }
  @media screen and (max-width: 400px) {
    width: 100%;
  }
`;
export { Home };

import styled from "styled-components";

const InnerHeader = styled.div`
  width: 100%;
  max-width: 100%;
  min-height: 10vh;
  display: grid;
  align-items: center;
  grid-template-columns: 1fr 2fr 1fr;
  padding: 20px 10px;
  box-sizing: border-box;
`;
const Logo = styled.p`
  margin: 0px auto;
  font-size: 30px;
`;

export { InnerHeader, Logo };

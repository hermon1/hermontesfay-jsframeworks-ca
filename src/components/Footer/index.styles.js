import styled from "styled-components";

const Footer = styled.footer`
  width: 100%;
  display: flex;
  height: 10vh;
  padding: 0 20%;
  box-sizing: border-box;
  align-items: center;
  justify-content: space-between;
  border-top: solid 1px #808080;
  a{
    text-decoration: none;
  }
  @media screen and (max-width:584px) {
    
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    text-align: center;
    padding: 0 5%;
    .toHome{
      grid-column: 1/2;
      text-align: start;
    }
    .toContact{
      grid-column: 2/3;
      text-align: end;
    }
    p{
      grid-column: 1/3;
      grid-row: 2/3;
      margin: 0;
    }
  }
 
`;

export { Footer };

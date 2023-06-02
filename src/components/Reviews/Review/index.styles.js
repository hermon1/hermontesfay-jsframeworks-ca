import styled from "styled-components";

const InnerReview = styled.div`
  box-shadow: 0px 2px 5px 2px rgba(128, 128, 128, 0.5);
  border-radius: 10px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-areas:
    "rating name"
    "text text";
  padding: 20px 10px;
  @media screen and (max-width: 460px) {
    width: 100%;
  }
`;
const Name = styled.h3`
  grid-area: name;
  text-align: end;
  margin: 0;
`;
const Description = styled.p`
  width: 100%;
  grid-area: text;
  font-size: 20px;
  margin: 10px 0 0 0;
`;

export { InnerReview, Name, Description };

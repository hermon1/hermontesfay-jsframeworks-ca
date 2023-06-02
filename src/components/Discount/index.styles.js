import styled from "styled-components";

const DiscountOverlay = styled.div`
  border-radius: 50%;
  height: 50px;
  width: 50px;
  background-color: #dd5f57;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 10px;
  right: 10px;
  p {
    color: white;
    font-weight: 500;
  }
`;

export { DiscountOverlay };

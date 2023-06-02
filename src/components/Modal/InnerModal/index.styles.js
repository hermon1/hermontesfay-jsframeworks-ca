import styled from "styled-components";

//naming is based on where it is used, small is for phone size, where the modal should take up most of the screen
const InnerModalSmall = styled.div`
  z-index: -1;
  width: 80%;
  height: 100%;
  background-color: white;
`;
const InnerModalBig = styled.div`
  z-index: -1;
  width: 300px;
  height: 100%;
  background-color: white;
`;
const ModalButton = styled.button`
  background-color: white;
  border: none;
  float: right;
  margin: 10px 10px auto auto;
`;

export { InnerModalBig, InnerModalSmall, ModalButton };

import styled from "styled-components";

const NavSection = styled.div`
  display: flex;
  font-size: 25px;
  gap: 20px;
`;
const ModalNavSection = styled.div`
  width: 100%;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  padding-left: 60px;
  padding-top: 30px;
  gap: 40px;
  z-index: -1;
`;

export { NavSection, ModalNavSection };

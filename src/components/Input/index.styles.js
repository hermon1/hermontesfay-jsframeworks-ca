import styled from "styled-components";

const Input = styled.input`
  border-radius: 5px;
  border: solid 1px #808080;
  min-height: 30px;
  padding-left: 10px;
  box-sizing: border-box;
`;
const TextArea = styled.textarea`
  height: 200px;
  max-width: 100%;
  min-width: 100%;
  max-height: 200px;
  min-height: 200px;
  border-radius: 5px;
  border: solid 1px #808080;
  min-height: 20px;
  padding-left: 10px;
  box-sizing: border-box;
  @media screen and (max-width: 1024px) {
  }
`;
const InnerInput = styled.div`
  display: grid;
  width: 75%;
  margin: 0 auto;
  label {
    padding-left: 10px;
    margin-bottom: 2px;
  }
  p {
    min-height: 20px;
    padding-left: 10px;
  }
  @media screen and (max-width: 1024px) {
    grid-template-columns: 60% 40%;
    grid-template-rows: auto auto;
    grid-template-areas:
      "labelName labelName"
      "field error";
    label {
      grid-area: labelName;
    }
    p {
      grid-area: error;
      margin: 0;
      padding-left: 20px;
    }
    Input,
    TextArea {
      grid-area: field;
    }
  }
  @media screen and (max-width: 800px) {
    grid-template-columns: 1fr 1fr;
    width: 100%;
  }
  @media screen and (max-width: 550px) {
    grid-template-columns: 1fr;
    grid-template-rows: auto auto auto;
    grid-template-areas:
      "labelName"
      "field"
      "error";
    p {
      padding-left: 10px;
    }
  }
`;
export { Input, TextArea, InnerInput };

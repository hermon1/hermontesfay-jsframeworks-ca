import styled from "styled-components";
import { Main } from "../../theme/theme";

const ContactMain = styled(Main)`
  width: 50%;
  max-width: 50%;
  box-sizing: border-box;
  h1 {
    text-align: center;
  }
  form {
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-areas:
      "fullName subject"
      "email body"
      ". submit";
    align-items: start;
    .submit {
      grid-area: submit;
      width: 75%;
      margin: 0 auto;
      Button {
        width: 25%;
        margin: 0 0 0 auto;
        display: block;
      }
    }
    #email {
      grid-area: email;
    }
    #fullName {
      grid-area: fullName;
    }
    #subject {
      grid-area: subject;
    }
    #body {
      grid-area: body;
    }
  }
  @media screen and (max-width: 1250px) {
    width: 75%;
    max-width: 75%;
  }
  @media screen and (max-width: 1024px) {
    form {
      grid-template-columns: 1fr;
      grid-template-areas:
        "fullName"
        "email"
        "subject"
        "body"
        "submit";
      gap: 20px;
      .submit > Button {
        margin: 0 auto 0 0;
      }
    }
  }
  @media screen and (max-width: 800px) {
    width: 100%;
    max-width: 100%;
    form > .submit {
      width: 100%;
    }
  }
  @media screen and (max-width: 550px) {
    form > .submit > Button {
      margin: 0 0 0 auto;
      width: auto;
    }
  }
`;

export { ContactMain };

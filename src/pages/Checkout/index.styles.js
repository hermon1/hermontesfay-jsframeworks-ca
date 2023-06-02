import styled from "styled-components";

import { Main } from "../../theme/theme";
const SuccessMessage = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    column-gap: 20px;
    margin: 0 auto;
    grid-column: 1/3;
    align-items: center;
    @media screen and (max-width:600px){
        grid-row: 1/2;
        grid-column: 1/2;
    }
`;
const CheckoutMessage = styled.div`
    display: flex;
    flex-direction: column;
    grid-column: 1/2;
    margin: 20% auto auto auto;
    p{
        margin: 10px 0;
    }
    width: 75%;
    @media screen and (max-width:600px){
        grid-row: 3/4;
        width: 90%;
        margin: 0 auto auto auto;
    }
`;


const CheckoutMain = styled(Main)`
box-sizing: border-box;
gap: 0 20px;
width: 60%;
display: grid;
grid-template-columns: 1fr 1fr;
grid-template-rows: 75px auto 50px;
.botBtn{
    grid-column: 1/3;
    margin: 0 auto;
}
@media screen and (max-width:1024px){
width: 80%;
}
@media screen and (max-width:700px){
width: 90%}
@media screen and (max-width:600px){
    grid-template-columns: 1fr;
    grid-template-rows: auto auto auto 1fr;
    align-content: start;
    width: 100%;
    gap:20px 0;
    h1{
        font-size: 25px;
    }
    .botBtn{
        margin: auto auto 0 auto;
    }
}
`
export {SuccessMessage, CheckoutMessage, CheckoutMain};
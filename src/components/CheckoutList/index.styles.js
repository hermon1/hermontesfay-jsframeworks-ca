import styled from "styled-components";

const Reciept = styled.div`
    border-radius: 10px;
    box-shadow: 0px 2px 5px 2px rgba(128, 128, 128, 0.5);
    padding: 20px 10px;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    gap: 10px;
   

`
const OuterList = styled.div`
 grid-column: 2/3;
    @media screen and (max-width:600px){
        grid-row: 2/3;
        grid-column: 1/2;
    }
`


export {Reciept, OuterList}
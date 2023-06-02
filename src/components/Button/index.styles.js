import styled from "styled-components";


const Button = styled.button`
    background-color: #EAAA52 ;
    border-radius: 5px;
    border: solid 1px #EAAA52;
    padding: 5px 10px;
    box-sizing: border-box;
    :hover{
        cursor: pointer;
        background-color: #fff;

    };
    :active{
        border-color: #808080;
    }
`


export {Button};
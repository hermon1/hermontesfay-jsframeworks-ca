import styled from "styled-components";


const Button = styled.button`
    background-color: #9ACF8C ;
    border-radius: 5px;
    border: solid 1px #9ACF8C;
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
import styled from "styled-components";
import { Link } from "react-router-dom";

const SearchResultInner = styled.div`
    display: grid;
    grid-template-columns: 2fr 1fr;
    border-bottom: 1px solid #464343;
    width: 100%;
    padding: 0 10px;
    box-sizing: border-box;
   
`
const SearchResultLink = styled(Link)`
        text-decoration: none;
        height: 100%;
        width: 100%;
        display: grid;
        .price{
            text-align: end;
        }
        :nth-child(odd){
            div{
            background-color: #ececec;
        }
        }
  :last-of-type{
    div{
        border: none;
        border-radius: 0 0 10px 10px;
      }}
      :hover{
        div{
        background-color:#DBDBDB;
    }
      }
   
`

export {SearchResultInner, SearchResultLink}
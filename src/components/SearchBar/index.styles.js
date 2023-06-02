import styled from "styled-components";
const InnerSearchBar = styled.div`
  width: 100%;
  padding: 0px;
  margin: 0px;
  min-height: 5vh;
  background-color: #91e58f;
  display: grid;
  grid-template-columns: 12.5% 75% 12.5%;
  .search{
   display: grid;
   grid-column: 2/3;
   position: relative;
   box-sizing: border-box;
   margin: 0 10px;
  
   .searchResult{
      position: absolute;
      top:75%;
      width: 100%;
      z-index: 1;
      background-color: #ffffff;
      border-radius: 0 0 10px 10px;
      box-sizing: border-box;
      border: solid 1px #464343;
      border-top: none;
      box-shadow: 0px 2px 5px 2px rgba(128, 128, 128, 0.5);
      
    }
  }
  @media screen and (max-width: 1024px) {
      .search{
        grid-column: 1/4;
      }
  }
  @media screen and (max-width: 460px) {
    .search{

    }
  }

`;
const Search = styled.input`
  background-color: white;
  width: 100%;
  height: 50%;
  box-sizing: border-box;
  border: none;
  margin: auto 0px;
  border-radius: 5px;
  :focus {
    border-radius: 5px 5px 0px 0px;
    border: solid 1px #464343;
    outline: none;
  }
  @media screen and (max-width: 460px) {
    height: 75%;
  }
`;

export { InnerSearchBar, Search };


import styled from "styled-components";
import { styled as muiStyled } from "@mui/material/styles";
import Rating from "@mui/material/Rating";

const InnerRating = styled.div`
  display: flex;
  align-items: center;
  p {
    margin: 0px;
    font-weight: bold;
    font-size: 20px;
  }
`;
//custom color for outline and filled on rating
const SecondaryColorRating = muiStyled(Rating)(({ theme }) => ({
  "& .MuiRating-iconFilled": {
    color: theme.palette.secondary.main,
  },
  "& .MuiRating-iconEmpty": {
    color: theme.palette.secondary.main,
  },
}));
export { InnerRating, SecondaryColorRating };

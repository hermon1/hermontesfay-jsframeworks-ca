import { createTheme } from "@mui/material";
import styled from "styled-components";

const theme = createTheme({
  palette: {
    primary: { main: "#9ACF8C" },
    secondary: { main: "#EAAA52" },
    info: { main: "#464343" },
    error: { main: "#DD5F57" },
    success: { main: "#0AB21B" },
  },
});


const Main = styled.main`
  min-height: 75vh;
  padding: 0px 10px;
  margin: 10px auto;
`;
export { theme, Main };

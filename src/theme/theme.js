import { createTheme } from "@mui/material";
import styled from "styled-components";
/**
 * custom colors for the MUI theme, not used much but best way to do it
 */
const theme = createTheme({
  palette: {
    primary: { main: "#F2D3A8" },
    secondary: { main: "#EAAA52" },
    info: { main: "#464343" },
    error: { main: "#DD5F57" },
    success: { main: "#0AB21B" },
  },
});

/**
 * standard Main on all pages, but gets customized on everyone
 */
const Main = styled.main`
  min-height: 75vh;
  padding: 0px 10px;
  margin: 10px auto;
`;
export { theme, Main };

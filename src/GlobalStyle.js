import { createGlobalStyle } from "styled-components";
import background from "./features/currency-conventer/assets/money.jpg";

export const GlobalStyle = createGlobalStyle`
    html {
  box-sizing: border-box;
}
*, ::after, ::before {
  box-sizing: inherit;
}
body {
  font-family: "Roboto", sans-serif;
  line-height: 1.5;   
  background-image: url("${background}");
  background-repeat: no-repeat; 
  align-items: center;
  justify-content: center;
}
`;

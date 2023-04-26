import { createGlobalStyle } from "styled-components";
import background from "./App/assets/money.jpg";

export const GlobalStyle = createGlobalStyle`
    html {
  box-sizing: border-box;
}
*, ::after, ::before{
  box-sizing: inherit;
}
body {
  font-family: "Roboto", sans-serif;
  line-height: 1.5;   
  background-image: url("${background}");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat; 
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
}
`;

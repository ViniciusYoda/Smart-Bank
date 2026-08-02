import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * { box-sizing: border-box; }
  html { color-scheme: ${({ theme }) => theme.body === "#202124" ? "dark" : "light"}; }
  body { margin: 0; font-family: "Montserrat", sans-serif; background: ${({ theme }) => theme.body}; color: ${({ theme }) => theme.text}; }
  button, input, select { font: inherit; }
`;

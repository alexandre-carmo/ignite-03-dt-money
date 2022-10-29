import { createGlobalStyle } from "styled-components";

export const GlobalStyled = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :focus {
    outline: 0; // Remove a linha do focus padrão do chrome
    box-shadow: 0 0 0 2px ${(props) => props.theme['gray-500']};
  }

  body {
    background-color: ${props => props.theme['gray-800']};
    color: ${props => props.theme['gray-100']};
    -webkit-font-smoothing: antialiased; // Deixa a font mais nítida
  }

  body, input, textarea, button {
    // font-weight font-size font, sans-serif;
    font: 400 1rem Roboto, sans-serif;
  }

`

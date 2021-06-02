import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body { 
    background: ${props => props.theme.colors.background};
  }

  button {
    cursor: pointer;
  }

  body, input, textarea, button {
  font: 500 1rem Poppins, sans-serif;
  color: ${props => props.theme.colors.text};
}

  h1, h2, h3, h4, h5, h6 {
    font-weight: 600;
    font-family: Archivo, sans-serif;
    color: ${props => props.theme.colors.text};
  }

  h1 {
    font-size: 2rem;
  }

  h2 {
    font-size: 1.5rem;
  }

  @media (max-width: 1366px){
    html{
    font-size: 75%; // 13px
    }
 }

  @media (max-width: 720px){
    html{
      font-size: 62.5%; // 14px
    }
  }
`;
import styled from 'styled-components';

export const InputContainer = styled.div`
  /* width: 100vh; */
  position: relative;
  /* margin-top: 1.4rem; */

  label {
    font-size: 1.4rem;
  }

  input {
    width: 100%;
    height: 3.5rem;
    border-radius: 0.8rem;
    background: ${props => props.theme.colors.buttonText};
    border: 1px solid #ddd;
    outline: 0;
    padding: 0 1.6rem;
    font: 1.6rem Archivo;

    /* &:focus-within::after {
      background: ${props => props.theme.colors.secondary};
    } */

    &:focus-within::after {
      width: calc(100% - 3.2rem);
      height: 2px;
      content: '';
      background: ${props => props.theme.colors.secondary};
      position: absolute;
      left: 1.6rem;
      right: 1.6rem;
      bottom: 0;
    }
  }

  .inputWithIcon {
    width: 100%;
    display: flex;
    align-items: center;
    border: 1px solid #ddd;
    border-radius: 0.8rem;

    i {
      cursor: pointer;
      margin-right: 1rem;

      .inputIcon {
        font-size: 1.5rem;
        color: #ddd;
        vertical-align: middle;

        transition: color 0.2s;

        &:hover {
          color: ${props => props.theme.colors.primary};
        }    
      }
    }

    input {
      //border: none;
      flex: 1;
    } 
  } 
 
`;
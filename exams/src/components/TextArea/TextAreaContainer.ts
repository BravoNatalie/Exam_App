import styled from 'styled-components';

import { InputContainer } from '../../components/Input/InputContainer';

export const TextAreaContainer = styled.div`
  position: relative;
  margin-top: 1.4rem;

  label {
    font-size: 1.4rem;
  }

  textarea {
    width: 100%;
    height: 10rem;
    min-height: 8rem;
    margin-top: 0.8rem;
    border-radius: 0.8rem;
    background: ${props => props.theme.colors.buttonText};
    border: 1px solid #ddd;
    outline: 0;
    resize: vertical;
    padding: 1.2rem 1.6rem;
    font: 1.6rem Archivo;
  }
`;
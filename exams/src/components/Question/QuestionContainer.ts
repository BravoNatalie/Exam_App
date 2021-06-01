import styled from 'styled-components';

import { TextAreaContainer } from '../TextArea/TextAreaContainer';

export const QuestionContainer = styled.div`
  ${TextAreaContainer} {
    label { 
      font-weight: 600;
    }
  }

  button {
    background: none;
    border: 0;
    color: ${props => props.theme.colors.secondary};
    font: 700 1.15rem Archivo;
    float: right;
    margin-top: 1rem;

    transition: color 0.2s;
    
    &:hover {
      color: #B2585C;
    }
  }
`;
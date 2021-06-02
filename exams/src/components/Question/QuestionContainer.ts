import styled from 'styled-components';

import { TextAreaContainer } from '../TextArea/TextAreaContainer';

export const QuestionContainer = styled.div`

  & ~ & {
    border-top: 1px solid #E6E6F0;
    padding-top: 1.2rem;
    margin-top: 6.6rem;
  }
  
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
import styled from 'styled-components';

import { InputContainer } from '../../components/Input/InputContainer';

export const AnswerContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 1rem;
  
  span {
    margin-left: 1rem;
    margin-right: 1.5rem;
    font: 700 1.3rem Poppins, sans-serif;
  }

  ${InputContainer} {
    width: 100%;
    input {
      margin-top: 0;
    }
  }
`;
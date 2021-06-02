import styled from 'styled-components';

import { QuestionContainer } from '../../components/Question/QuestionContainer';
import { InputContainer } from '../../components/Input/InputContainer';

export const ExamFormContainer = styled.div`
  overflow-y: scroll;
  height: calc(100vh - 6.5rem);
  background: ${props => props.theme.colors.primary};
 
  main {
    background: ${props => props.theme.colors.buttonText};
    width: 100%;
    max-width: 74rem;
    border-radius: 0.8rem;
    margin: 2rem auto 3.2rem;
    padding-top: 3rem;
    overflow: hidden;

    fieldset {
      border: 0;
      padding: 0 6.4rem;

      & + fieldset {
        margin-top: 6.4rem;
      }

      ${InputContainer} {
        & + ${InputContainer} {
          margin-top: 1.4rem;
        }

        input {
          margin-top: 0.8rem;
        }
      }

      
      legend {
        font: 700 2.4rem Archivo;
        color: ${props => props.theme.colors.text};
        margin-bottom: 2.4rem;
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 100%;
        padding-bottom: 1.6rem;
        border-bottom: 1px solid #E6E6F0;

        button {
          background: none;
          border: 0;
          border-radius: 0.8rem;
          padding: 0.5rem 1.5rem;
          color: ${props => props.theme.colors.tertiary};
          font: 700 1.4rem Archivo;

          transition: all 0.2s ease-in-out;
        
        &:hover {
          /* color: rgba(255, 255, 255, 1); */
          box-shadow: 0 5px 15px rgba(68, 51, 189, .5);
        }
        }
      }

      
    }

    footer {
      padding: 3rem 6.4rem;
      background: #FAFAFC;
      border-top: 1px solid #E6E6F0;
      margin-top: 6.4rem;
      display: flex;
      justify-content: flex-end;

      button {
        width: 23%;
        height: 3.5rem;
        background: ${props => props.theme.colors.primary};
        color: ${props => props.theme.colors.buttonText};
        border: 0;
        border-radius: 0.8rem;
        font: 700 1.6rem Archivo;
        margin-top: 1.5rem;

        transition: all 0.2s ease-in-out;
        
        &:hover {
          color: rgba(255, 255, 255, 1);
          box-shadow: 0 5px 15px rgba(118, 199, 172, .9);
        }
      }
    }
  }

  @media screen and (max-width: 650px) {
    max-width: 100vw;

    main {
      fieldset {
        padding: 0 2rem;
      }

      footer {
        padding: 4.0rem 6.4rem;
        display: flex;
        align-items: center;
        justify-content: center;

        button {
          width: 20rem;
          margin-top: 0;
        }
      }
    }
  }
`;
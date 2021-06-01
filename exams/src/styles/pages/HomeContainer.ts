import styled from 'styled-components';

import { InputContainer } from '../../components/Input/InputContainer';

export const HomeContainer = styled.div`

  padding: 0 5rem;
  height: calc(100vh - 6.5rem);
  overflow-y: scroll;

  .userInteraction {
    margin-top: 3rem;
    margin-bottom: 5rem;
    display: flex;
    justify-content: center;
    align-items: center;

    ${InputContainer} {
      width: 100vh;
    }

    .newButtonIcon {
      font-size: 1.5rem;
      vertical-align: middle;
    }

    button {
      border: 0;
      color: ${props => props.theme.colors.buttonText};
      background-color: ${props => props.theme.colors.primary};
      border-radius: 0.5rem;
      margin-left: 10rem;
      width: 9rem;
      height: 3rem;

      transition: all 0.2s ease-in-out;

      &:hover {
        color: rgba(255, 255, 255, 1);
        box-shadow: 0 5px 15px rgba(118, 199, 172, .9);
      }
    }

    @media screen and (max-width: 650px) {
      margin: 2rem 0 2rem;

      button {
        margin-left: 2rem;

        span {
          display: none;
        }
      }
    }
  }

  .allExams {
    padding-bottom: 2rem;

    table{
      width: 100%;

      tbody tr:hover{
        background-color: ${props => props.theme.colors.buttonText};
        cursor: pointer;
      }

      th, td {
        padding: 0.75rem 1rem;
        border-bottom: 1px solid #E6E8EB
      }

      th {
        color: var(--gray-200);
        text-transform: uppercase;
        font: 500 0.75rem Lexend, sans-serif;
        text-align: left;
      }

      td {
        font-size: 0.875rem;

        img {
          width: 2.5rem;
          height: 2.5rem;
          border-radius: 0.5rem;
        }

        a {
          color:var(--gray-800);
          font-family: Poppins, sans-serif;
          font-weight: 600;
          text-decoration: none;
          line-height: 1.4rem;
          font-size: 1rem;
        }

        .buttonContainer {
          display: flex;
          justify-content: space-evenly;

          .buttonIcon {
            font-size: 1.1rem;
            color: #2E3A59;
            
            transition: transform 0.5s ease 0s;

            &:hover {
              transform: rotate(30deg);
            }    
          }

          button {
            border: 0;
            background-color: transparent;
          }
        }
      }

      td:nth-of-type(5){width: 100px;}
      td:nth-of-type(4){padding-left:3rem;}
    }

    @media screen and (max-width: 650px) {

      table caption {
        font-size: 1.3em;
      }
      
      table thead {
        border: none;
        clip: rect(0 0 0 0);
        height: 1px;
        margin: -1px;
        overflow: hidden;
        padding: 0;
        position: absolute;
        width: 1px;
      }
      
      table tr {
        border: 1px solid #E6E8EB;
        border-radius: 0.5rem;
        border-bottom: 3px solid #ddd;
        display: block;
        margin-bottom: .625rem;
      }
      
      table td {
        display: block;
        font-size: .8rem;
        text-align: right;
      }
      
      table td::before {
        content: attr(data-label);
        float: left;
        font-weight: bold;
        text-transform: uppercase;
      }
      
      table td:last-child {
        border-bottom: 0;
      }

      td:nth-of-type(5){width: 100% !important;}
      td:nth-of-type(4){padding-left: 1rem !important;}

      td:nth-of-type(1):before { content: "ID"; }
      td:nth-of-type(2):before { content: "Title"; }
      td:nth-of-type(3):before { content: "Subjects"; }
      td:nth-of-type(4):before { content: "nº Questions";}
      td:nth-of-type(5):before { content: "Date"; }
    }
  }

  @media screen and (max-width: 650px) {
    padding: 0 2rem;
  }

`;
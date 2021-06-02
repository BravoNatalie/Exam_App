import styled from 'styled-components';

export const ExamContainer = styled.div`
  overflow-y: scroll;
  height: calc(100vh - 6.5rem);
  background: ${props => props.theme.colors.primary};
  color:#9C98A6;

  main {
    background: ${props => props.theme.colors.buttonText};
    width: 100%;
    height: calc(100vh - 6.5rem);
    max-width: 74rem;
    border-radius: 0.8rem;
    margin: 2rem auto 3.2rem;
    padding-top: 3rem;
    overflow: hidden;

    section {
      border: 0;
      padding: 0 6.4rem;

      & + section {
        margin-top: 3.4rem;
      }

      h1 {
        font: 700 2.4rem Archivo;
        color: ${props => props.theme.colors.text};
        margin-bottom: 1.4rem;
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 100%;
        padding-bottom: 1.6rem;
        border-bottom: 1px solid #E6E6F0;
      }

      .subjects {
        display: flex;
        align-items: center;

        p {
          margin-right: 0.8rem;
          font: 500 1.1rem Poppins, sans-serif;
          color: #4433BD;
        }        
      }

      .examDescription {
        margin-top: 1rem;
        padding-bottom: 2.4rem;
        font: 500 1.4rem Poppins, sans-serif;
        border-bottom: 1px solid #E6E6F0;
      }

      .questionItem {
        padding-bottom: 2.4rem;
        border-bottom: 1px solid #E6E6F0;

        .questionDescription {
          display: flex;
          align-items: center;
          margin-bottom: 1.6rem;

          span {
            font: 700 2rem Poppins, sans-serif;
            color: ${props => props.theme.colors.text};
            margin-right: 1.3rem;
          }
        }

        .alternativesItems {
          display: flex;
          align-items: center;
          margin-left: 2rem;
          margin-bottom: 1.2rem;

          span {
            font: 700 1.5rem Poppins, sans-serif;
            margin-right: 2rem;
          }

          p {
            font: 500 1.2rem Poppins, sans-serif;
          }
        }
      }
    }
  }
  @media screen and (max-width: 650px) {
    max-width: 100vw;

    main {
      section {
        padding: 0 2rem;
      }
    }
  }
`;
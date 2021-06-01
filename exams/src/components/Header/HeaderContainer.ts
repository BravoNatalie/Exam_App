import styled from 'styled-components';

export const HeaderContainer = styled.header`

  background: ${props => props.theme.colors.buttonText};
  height: 6.5rem;

  display: flex;
  align-items: center;

  padding: 2rem 2.5rem;

  border-bottom: 1px solid #E6E8EB;

  img {
    max-width: 200%;
    max-height: 200%;
    display: block;
  }

  p {
    margin-left: 2rem;
    padding: 0.25rem 0 0.25rem 2rem;
    border-left: 1px solid #E6E8EB;
  }
`;
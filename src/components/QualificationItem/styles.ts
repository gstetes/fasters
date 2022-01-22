import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  img {
    height: 28.71px;
    width: 36px;
  };

  h2 {
    font-size: 24px;
    font-family: 'Cormorant', sans-serif;
    font-weight: 600;

    color: #1c86a4;

    margin-top: 1rem;
  };

  span {
    font-size: 16px;
    font-family: 'Lato', sans-serif;
    
    color: #727272;

    margin-top: 1rem;
  };
`;
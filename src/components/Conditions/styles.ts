import styled from 'styled-components';

export const Container = styled.div`
  padding: 0 6rem;

  display: flex;
  background: #013145
`;

export const Content = styled.section`
  padding: 3rem 0;

  display: flex;
  flex-direction: column;
  justify-content: space-around;

  h1 {
    font-size: 53px;
    font-family: 'Cormorant', sans-serif;
    font-weight: 400;

    color: #BE9667;
  };

  a {
    margin-top: 2rem;

    height: 55px;
    width: 330px;

    border-radius: 2px;
    
    background: #BE9667;

    display: flex;
    justify-content: center;
    align-items: center;

    text-decoration: none;

    transition: all 0.3s;

    &:hover {
      background: #727272;
    };

    span {
      color: #e0e0e0;

      font-size: 18px;
      font-family: 'Lato', sans-serif;
      font-weight: 400;
    };
  };
`;

export const TextContainer = styled.div`
  max-width: 90%;

  p {
    font-size: 30px;
    font-family: 'Cormorant', sans-serif;
    font-weight: 400;
    font-style: italic;
    
    color: #BE9667
  };

  div {
    display: flex;
    align-items: center;
    margin-top: 2rem;

    span {
      width: 15px;
      font-size: 30px;

      color: #BE9667
    };

    h3 {
      margin-left: 1rem;
      font-size: 22px;
      font-family: 'Lato', sans-serif;
      font-weight: 400;
      color: #c4c4c4;
    };
  };
`

export const ImageContainer = styled.div`
  padding: 2rem 0;

  img {
    height: 560px;
  };
`;
import styled from 'styled-components';

export const Container = styled.main`
  img {
    width: 100%
  };
`;

export const ContentSection = styled.section`
  position: absolute;
  top: 100px;

  padding: 0 4rem;

  width: 660px;

  a {
    display: flex;
    align-items: center;
    justify-self: center;
    
    position: absolute;
    top: 400px;
    
    width: 297px;
    height: 50px;
    border-radius: 2px;

    background: #014561;

    transition: all 0.5s;

    text-decoration: none;
    
    border: none;

    cursor: pointer;

    &:hover {
      background: transparent;
      border: 1px solid #BE9667;
    };

    span {
      font-size: 18px;
      font-family: 'Lato', sans-serif;

      color: #e5e5e5;

      margin: 0 auto;
    };
  };
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  line-height: 65px;

  span {
    font-size: 2.2rem;
    font-family: 'Playfair Display', sans-serif;
    font-style: italic;

    color: #be9667;

    &:last-child {
      align-self: flex-end;
    };
  };

  p {
    font-size: 5.65rem;
    font-family: 'Playfair Display', sans-serif;

    color: #024B68;
  };

`;

export const PaymentText = styled.div`
  margin-top: 3rem;

  font-size: 1.5rem;
  font-family: 'Lato', sans-serif;

  line-height: 35px;

  color: #fff;
`;
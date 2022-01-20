import styled from 'styled-components';

export const Container = styled.main`
  margin: 0 4rem;
  margin-top: 3rem;
  padding-bottom: 3rem;
`;

export const ContentContainer = styled.section`
  display: flex;
`;

export const Content = styled.div`
  flex: 1;
  margin-left: 4rem;

  p {
    margin-top: 2.5rem;

    font-family: 'Lato', sans-serif;
    font-size: 19px;

    color: #333;          
  };

  button {
    background: #014561;
    margin-top: 0.5rem;

    width: 300px;
    height: 50px;

    border: none;

    cursor: pointer;

    transition: all 0.3s;

    &:hover {
      background: #013145;
    };

    span {
      color: #e5e5e5;

      font-family: 'Lato', sans-serif;
      font-size: 18px;
    };
  };
`;  

export const CommaText = styled.div`
  display: flex;
  flex-direction: column;

  p {
    font-size: 24px;
    font-family: 'Cormorant', sans-serif;
    font-weight: 400;
    font-style: italic;

    color: #1c86a4;
  };

  span { 
    align-self: flex-end;
    
    font-size: 20px;
    font-family: 'Cormorant', sans-serif;
    font-weight: 500;

    color: #828282;
  };
`;
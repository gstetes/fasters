import styled from 'styled-components';

export const Container = styled.div`
  margin-top: 3rem;
  height: 360px;
  
  display: flex;

  background-color: #EFF7F9;
`;

export const Content = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1;
`;

export const ImageContainer = styled.div`
  align-self: flex-end;
  width: 313px;
  height: 360px;
`;

export const TextContent = styled.div`
  padding: 0 4rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  margin-right: 4rem;

  p {
    font-family: 'Lato', sans-serif;
    font-size: 24px;
    color: #828282;

    max-width: 70%;
  };

  h3 {
    font-size: 28px;
    font-family: 'Cormorant', sans-serif;
    font-weight: 400;
    font-style: italic;

    color: #014561;

    margin-top: 4rem;
  };

  span {
    display: flex;

    margin-top: 1rem;

    font-size: 20px;
    font-family: 'Lato', sans-serif;
    color: #be9667;

    div {
      border-left: 1px solid #be9667;
      margin: 0 0.75rem;
    };
  };
`;

export const ImageContent = styled.div`
  margin-top: 1.5rem;
  position: absolute;
  right: 250px;

  div {
    border: 7px solid #fff;
    position: absolute;
    height: 318.24px;
    width: 220.95px;
    right: 40px;
    margin-top: 1.5rem;
    transform: rotate(7.5deg);
  };
`;
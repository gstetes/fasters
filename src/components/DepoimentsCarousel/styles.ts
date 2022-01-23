import styled from 'styled-components';

export const Container = styled.div`
  margin-top: 8rem;
  padding-bottom: 3rem;
  height: 600px;

  display: flex;
  flex-direction: column;
  align-items: center;

  background: #013145;

  h2 {
    margin-top: 4rem;
  };

  .carousel-points {
    display: flex;
    justify-content: space-between;
    height: 5px;
    width: 100px;

    .carousel-item {
      width: 10px;
      height: 10px;
      border: 1px solid #014561;
      border-radius: 50%;
    };

    .active {
      background: #014561;
    };
  };
`;

export const DepoimentContainer = styled.div`
  width: 65%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  img {
    border: 3px solid #BE9667;
    border-radius: 50%;
    margin-bottom: 2rem;
  };

  p {
    font-size: 26px;
    font-family: 'Cormorant', sans-serif;
    font-style: italic;

    color: #c4c4c4;

    text-align: center;
  };

  span {
    margin-top: 2rem;

    font-size: 20px;
    font-family: 'Cormorant', sans-serif;
    font-weight: 400;

    color: #BE9667;
  };

  h3 {
    display: flex;

    font-size: 14px;
    font-family: 'Lato', sans-serif;
  
    color: #949494;

    div {
      border-left: 1px solid #949494;
      margin: 0 .8rem;
    };
  };
`;

export const Carousel = styled.div`
  display: flex;
  flex: 1;
  justify-content: space-around;
  align-items: center;

  width: 100%;

  svg {
    cursor: pointer;
  };
`;
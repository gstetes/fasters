import styled from 'styled-components';
// import {} from 'polished';

export const Container = styled.div`
  display: flex;
  align-items: center;

  width: 550px;

  transition: all 1s;

  z-index: 1;

  &:hover {
    filter: brightness(20%);
  };


  img {
    margin-left: 0.5rem;

    background-color: #000;
  };

  div {
    border: 1px solid #1C86A4;

    position: absolute;

    width: 550px;
    height: 464px;
  };
`;
import styled from 'styled-components';

type ComponentProps = {
  revert?: boolean;
};

export const Container = styled.div`
  padding: 0 4rem;

  display: flex;
  flex-direction: column;
`;

export const Content = styled.div`
  display: flex;
  align-items: center;

  margin-top: 5rem;
`;

export const TextContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  
  height: 385px;
  margin-left: ${(props: ComponentProps) => props.revert? '0' : '-3rem'};
  margin-right: ${(props: ComponentProps) => props.revert? '-3rem' : '0'};

  flex: 1;

  border: 1px solid #E5E5E5;

  .title {
    display: flex;
    flex-direction: column;
    align-items: center;
    align-self: center;
  };

  h1 {
    font-size: 62px;
    font-family: 'Cormorant', sans-serif;

    color: #014561;

    margin-top: 1.5rem;
  };

  span {
    font-size: 16px;
    font-family: 'Lato', sans-serif;
    font-weight: 400;

    color: #c4c4c4;
  };

  .list {
    display: flex;
    justify-content: space-between;
    align-self: center;

    width: 50%;

    li {
      font-size: 24px;
      font-family: 'Cormorant', sans-serif;
      font-weight: 400;
      font-style: italic;
      margin-top: .5rem;

      color: #727272;
    };
  };

  a {
    margin-left: 9.8rem;
    height: 50px;
    width: 330px;

    border-radius: 2px;

    display: flex;
    align-items: center;
    justify-content: center;

    background-color: #014561;

    transition: all 0.3s;

    text-decoration: none;

    span {
      font-size: 18px;
      font-family: 'Lato', sans-serif;
      color: #E5E5E5;
    };

    &:hover {
      background-color: #013145;
    };
  };

`
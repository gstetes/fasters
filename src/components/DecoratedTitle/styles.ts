import styled from 'styled-components';

type ComponentProps = {
  white?: boolean;
};

export const Container = styled.div`
  max-width: 200px;

  &:hover {
    div {
      width: 200px;
    };
  };

  h2 {
    font-size: 38px;
    font-family: 'Cormorant', sans-serif;

    color: ${(props: ComponentProps) => props.white ? '#F2F2F2' : '#014561'};

  };

  div {
    display: flex;
    width: 53px;
    border-bottom: 1px solid #70B0C4;
    margin: 0 auto;
    margin-top: 1rem;

    transition: all 0.3s;
  }
`;
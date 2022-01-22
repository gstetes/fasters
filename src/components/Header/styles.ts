import styled from 'styled-components';

type ComponentProps = {
  transparentHeader: boolean;
};

export const Container = styled.header`
  z-index: 999;

  height: ${(props: ComponentProps) => props.transparentHeader ? '111px' : '66px'};
  width: ${(props: ComponentProps) => props.transparentHeader ? '98.5vw' : '100vw'};

  padding: 0 4rem;

  display: flex;
  align-items: center;
  justify-content: space-between;

  background: ${(props: ComponentProps) => props.transparentHeader ? 'linear-gradient(180deg, #000, transparent)' : '#FFF'};
  position: ${(props: ComponentProps) => props.transparentHeader ? 'absolute' : 'fixed'};

  transition: all 0.5s;
`;

export const LogoContainer = styled.div`
  display: flex;

  div {
    display: flex;
    flex-direction: column;

    margin-left: 0.15rem;

    font-size: 1.55rem;
    letter-spacing: 0.65rem;

    color: ${(props: ComponentProps) => props.transparentHeader ? '#FFF' : '#000'};

    transition: all 0.3s;
  }
`;

export const Navigation = styled.nav`
  width: 50%;

  display: flex;
  justify-content: space-between;

  a {
    color: #949494;

    font-family: 'Lato';
    text-decoration: none;

    cursor: pointer;

    transition: color 0.3s;

    &:hover {
      color: #014561     
    };
  };
`;
import { Container, LogoContainer, Navigation } from './styles';

import logoImage from '../../assets/logoImage.svg';
import { useEffect, useState } from 'react';

export function Header() {
  const [transparentHeader, setTransparentHeader] = useState(true);
  const [scrollPosition, setScrollPosition] = useState(0);

  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    if(scrollPosition > 100) {
      setTransparentHeader(false);
    } else {
      setTransparentHeader(true);
    };
  }, [scrollPosition]);

  return (
    <Container transparentHeader={transparentHeader}>
      <LogoContainer transparentHeader={transparentHeader}>
        <img src={logoImage} alt="Logo image" />
        <div>
          <p>Renee</p>
          <p>Trajar</p>
        </div>
      </LogoContainer>
      <Navigation>
        <a href="/">EMPRESA</a>
        <a href="/">CAMISARIA</a>
        <a href="/">ALFAIATARIA</a>
        <a href="/">DEPOIMENTOS</a>
        <a href="/">CONTATO</a>
      </Navigation>
    </Container>
  );
};
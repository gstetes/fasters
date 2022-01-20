import { Container, ContentSection, TextContainer, PaymentText } from './styles';

import bannerImage from '../../assets/Banner_1.png';

export function MainBanner() {
  return (
    <Container>
      <img src={bannerImage} alt="Banner" />
      <ContentSection>
        
        <TextContainer className='text-wrap'>
          <span>Elegante é ter um</span>
          <p>ALFAIATE</p>
          <span>para chamar de seu.</span>
        </TextContainer>

        <PaymentText>
          <span>
            COMPRE HOJE, 
            <b> PAGUE EM ATÉ 3X COM 12% DE DESCONTO </b>
            E TENHA 10 MESES PARA CONFECCIONAR.
          </span>
        </PaymentText>

        <a href='/'>
          <span>FAÇA JÁ UM ORÇAMENTO</span>
        </a>
      </ContentSection>

    </Container>
  )
};
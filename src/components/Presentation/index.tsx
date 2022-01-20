import { Container, ContentContainer, Content, CommaText } from './styles';

import reneeImage from '../../assets/ReneeImage.png';
import { DecoratedTitle } from '../DecoratedTitle';

export function Presentation() {
  return (
    <Container>

      <ContentContainer>

        <img src={reneeImage} alt="Renee Trajar Image" />

        <Content>
          <DecoratedTitle label="Renee Trajar"/>

          <p>Com mais de 35 anos de experiência em camisas, calças e ternos sob medida, possuimos profissionais experientes e altamente qualificados.</p>
          <p>Cada cliente tem seu molde exclusivamente desenvolvido para seu biotipo através das medidas tiradas pelo próprio Sr.Renee, no escritório ou residência do cliente.</p>

          <CommaText>
            <p>
              "Nosso objetivo é superar a expectativa do cliente proporcionando-lhe satisfação ao usar nossos produtos, aliado a um relacionamento franco e honesto, valorizando o ser humano."
            </p>
            <span>Renee Trajar</span>
          </CommaText>

          <button>
            <span>Agende uma visita!</span>
          </button>
        </Content>

      </ContentContainer>
      
    </Container>
  );
};
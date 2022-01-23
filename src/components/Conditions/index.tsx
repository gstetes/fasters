import { Container, Content, TextContainer, ImageContainer } from './styles';

import conditionsImage from '../../assets/conditionsImage.png';

export function Conditions() {
  return (
    <Container>
      <Content>
        <h1>CONDIÇÃO IMPERDÍVEL</h1>
        <TextContainer>
          
          <p>Compre hoje e garanta:</p>

          <div>
            <span>- </span> <h3>12% de desconto e pagamento em até <strong>3x sem juros;</strong></h3>
          </div>

          <div>
            <span>- </span> <h3>Até <strong>10 meses </strong>para confeccionar sua roupa. Não se preocupe se suas medidas aumentaram ou diminuiram, estará sempre elegante;</h3>
          </div>

          <div>
            <span>- </span> <h3>Condição muito especial por <strong>tempo limitado;</strong></h3>
          </div>

          <div>
            <span>- </span> <h3>Poder presentear alguém com uma roupa de alta costura, <strong>exclusiva.</strong></h3>
          </div>

        </TextContainer>
        <a href="/">
          <span>Garanta essa condição especial!</span>
        </a>
      </Content>
      <ImageContainer>
        <img src={conditionsImage} alt="Conditions image" />
      </ImageContainer>
    </Container>
  );
};